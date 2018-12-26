using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CSharp_Algorithm.Helper;
using CSharp_Algorithm.Model;

namespace CSharp_Algorithm.Code
{
    class SieveOfEratosthenes2 : IModelPrimeNumber
    {
        private Boolean[] isPrime;
        private ModelPrimeNumber model;
        public ModelPrimeNumber Model { get { return model; } }
        private static WaitHandle[] waitHandles = new List<WaitHandle>()
            {
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false),
                new AutoResetEvent(false)
            }.ToArray();
        public SieveOfEratosthenes2(Int64 max)
        {
            model = new ModelPrimeNumber("Sieve Of Eratosthenes Multithread", max, Calcul);
        }

        public List<Int64> Calcul()
        {
            
            isPrime = new bool[model.max];
            isPrime[6] =
                isPrime[8] =
                isPrime[9] =
                isPrime[10] =
                isPrime[12] =
                isPrime[14] = isPrime[15] = isPrime[16] = isPrime[18] = isPrime[20] = isPrime[21] = isPrime[22] = true;
            Int64 x = 3;
            
            for (Int32 j = 0; j < waitHandles.Length; j++)
                {
                    ThreadPool.QueueUserWorkItem(ProccessSieveOfEratosthenes.Step, new ModelOfSieveOfEratosthenes()
                    {
                        isPrime = isPrime,
                        start = x,
                        waitHandles = waitHandles[j],
                        model = model
                    });
                    while (isPrime[x += 2]) ;
                }
            while ( x <= model.squareMax )
            {
               int currentThread = WaitHandle.WaitAny(waitHandles);
               ThreadPool.QueueUserWorkItem(Helper.ProccessSieveOfEratosthenes.Step, new ModelOfSieveOfEratosthenes()
               {
                   isPrime = isPrime,
                   start = x,
                   waitHandles = waitHandles[currentThread],
                   model = model
               });
               while (isPrime[x += 2]) ;
            }
            WaitHandle.WaitAll(waitHandles);
            List<ModelOfSieveOfEratosthenes> sieves = new List<ModelOfSieveOfEratosthenes>();
            var res = new List<Int64>() { 2, 3 };
            Int64 nbThreads = waitHandles.Length;
            Int64  separation = (model.max-4) / nbThreads;
            if (separation%2 != 0) separation--;
            for (Int32 j = 0; j < nbThreads; j++)
            {
                var sieve = new ModelOfSieveOfEratosthenes()
                {
                    isPrime = isPrime,
                    start = 5 + j * separation,
                    end = ((j + 1 == nbThreads) ? model.max : 5 + (j + 1) * separation - 1),
                    waitHandles = waitHandles[j],
                    model = model,
                    addedPrime = new List<long>()
                };
                sieves.Add(sieve);
                ThreadPool.QueueUserWorkItem(Helper.ProcessMerge.MergePrimer, sieves[j]);
            }
            WaitHandle.WaitAll(waitHandles);
            for (Int32 j = 0; j < nbThreads; j++)
            {
                if (sieves[j].addedPrime!=null)
                res.AddRange(sieves[j].addedPrime);
            }
            return res;
        }
    }

}

namespace CSharp_Algorithm.Helper
{
     static class ProccessSieveOfEratosthenes
    {
         public static void Step(object state)
        {
            ModelOfSieveOfEratosthenes sieve = (ModelOfSieveOfEratosthenes)state;
            var model = sieve.model;
            //model.isPrime=new bool[model.end-model.start+1];
            AutoResetEvent are = (AutoResetEvent)sieve.waitHandles;

            for (Int64 i = 2 * sieve.start; i < model.max; i += sieve.start)
            {
                sieve.isPrime[i] = true;
            }
            are.Set();
        }
    }

     static class ProcessMerge
    {
        public static void MergePrimer(object state)
        {
            ModelOfSieveOfEratosthenes sieve = (ModelOfSieveOfEratosthenes)state;
            var model = sieve.model;
            AutoResetEvent are = (AutoResetEvent)sieve.waitHandles;
            for (Int64 i = sieve.start; i < sieve.end; i+=2)
            {
                if (!sieve.isPrime[i]) sieve.addedPrime.Add(i);
            }
            are.Set();
        }
    }
}
