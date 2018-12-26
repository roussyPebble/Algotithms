using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CSharp_Algorithm.Code;

namespace CSharp_Algorithm.Model
{
    public class SieveOfAtkin2
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
        public SieveOfAtkin2(Int64 max)
        {
            model = new ModelPrimeNumber("Sieve of Atkin 2", max, Calcul);
        }

        private List<Int64> Calcul()
        {
            isPrime = new bool[model.max];

            Int64 nbThreads =  waitHandles.Length;
                    Int64 separation =  model.squareMax/nbThreads;
                    if (separation % 2 != 0) separation--;
                    List<ModelOfAtkin> sieves = new List<ModelOfAtkin>();
                    for (Int32 j = 0; j < nbThreads; j++)
                    {
                        var sieve = new ModelOfAtkin()
                            {
                                isPrime = isPrime,
                                start = 1 + j*separation,
                                end = ((j + 1 == nbThreads)
                                         ? model.squareMax
                                         : 1 + (j + 1)*separation - 1),
                                waitHandles = waitHandles[j],
                                model = model
                            };
                        sieves.Add(sieve);
                        ThreadPool.QueueUserWorkItem(ProcessOfAtkin.Step, sieve);
                    }
                    WaitHandle.WaitAll(waitHandles);

            for (Int64 k = 5; k <= model.squareMax; k++)
            {
                if (isPrime[k])
                {
                    for (Int64 p = 1, t = k * k, g = t; g < model.max; p++, g = p * t)
                    {
                        isPrime[g] = false;
                    };
                }
            }
            var res = new List<Int64>() { 2, 3 };
            separation = model.max / nbThreads;
            if (separation % 2 != 0) separation--;
            for (Int32 j = 0; j < nbThreads; j++)
            {
                sieves[j].addedPrime=new List<long>();
                sieves[j].start = 1 + j*separation;
                sieves[j].end = ((j + 1 == nbThreads) ? model.max : 1 + (j + 1)*separation - 1);
                ThreadPool.QueueUserWorkItem(ProcessMerge.MergePrimer, sieves[j]);
            }
            WaitHandle.WaitAll(waitHandles);
            for (Int32 j = 0; j < nbThreads; j++)
            {
                res.AddRange(sieves[j].addedPrime);
            }
                return res;
        }
    }
}
