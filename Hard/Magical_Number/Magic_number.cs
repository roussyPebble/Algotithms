using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace LeetCode
{
    public class Solution
    {
        public long NthMagicalNumber(int N, int A, int B)
        {
            return S(new Data(N,A,B));
        }
        private static long S(Data data)
        {
            long N = data.N, A = data.A, B = data.B;
            double a = Math.Min(A, B);
            double b = Math.Max(A, B);
            long result;
            if (b % a == 0)
            {
                result = (long)a * N;
            }
            else
            {
                long max = (int)Math.Ceiling(Math.Sqrt(a));
                ModelPrimeNumber primeNumbers;
                if (max < 60)
                {
                    primeNumbers = new SieveOfEratosthenes(max).Model.Calculation();
                }
                else
                {
                    primeNumbers = new SieveOfEratosthenes2(max).Model.Calculation();
                }

                double a1 = a, b1 = b;
                foreach (long i in primeNumbers.simpleNumber)
                {
                    while (true)
                    {
                        if (a1 % i == 0 && b1 % i == 0)
                        {
                            a1 = a1 / i;
                            b1 = b1 / i;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                double z = a1 * b;
                var approximation = N / (1 / a + 1 / b - 1 / z);
                long x = (long)Math.Floor(approximation);
                long k, m, n, p, iter = 0;
                do
                {
                    k = x / (long)a;
                    m = x / (long)b;
                    n = x / (long)z;
                    p = k + m - n;
                    if (N == p) break;
                    a1 = (k + 1) * a;
                    b1 = (m + 1) * b;
                    x = (long)((a1 < b1) ? a1 : b1);
                    iter++;
                } while (true);

                long x1 = k * (long)a;
                var validation = (long)(x1 / b) + k - (long)(x1 / z) == N;
                result = validation ? x1 : m * (long)b;
            }

            //return (long)(Int32.MaxValue < result ? result % (10e9 + 7) : result);
            //return (long)(Int32.MaxValue < result ? result % (10e9 + 7) : result);
            return result % 1000000007;
        }
    }
    public class Data
    {
        public long N { get; set; }
        public long A { get; set; }
        public long B { get; set; }
        public Data(long N, long A, long B)
        {
            this.N = N;
            this.A = A;
            this.B = B;
        }
    }
    class SieveOfEratosthenes : IModelPrimeNumber
    {
        private Boolean[] isPrime;
        private ModelPrimeNumber model;
        public ModelPrimeNumber Model { get { return model; } }
        public SieveOfEratosthenes(Int64 max)
        {
            model = new ModelPrimeNumber("Sieve Of Eratosthenes", max, Calcul);
        }

        public List<Int64> Calcul()
        {
            var res = new List<Int64>() { 2 };
            isPrime = new bool[model.max];
            Int64 x = 3;
            while (x <= model.squareMax)
            {
                for (Int64 i = 2 * x; i < model.max; i += x)
                {
                    isPrime[i] = true;
                }
                while (isPrime[x += 2]) ;
            }
            for (Int64 p = 3; p < model.max; p += 2)
            {
                if (!isPrime[p]) res.Add(p);
            }
            return res;
        }
    }
    interface IModelPrimeNumber
    {

        ModelPrimeNumber Model { get; }
        List<Int64> Calcul();
    }

    public class ModelPrimeNumber
    {
        public delegate List<Int64> Calcul();
        public List<Int64> simpleNumber;
        public DateTime date;
        public TimeSpan time;
        public Int64 max;
        public String title;
        public Int64 squareMax;
        public long halfMax;
        public Calcul calcul;
        //public String formatedTime { get { return String.Format("mm:ss.fff tt", time); } }
        public ModelPrimeNumber(String name, Int64 limit, Calcul calcul)
        {
            max = limit;
            squareMax = (Int64)Math.Floor(Math.Sqrt(limit));
            halfMax = max / 2;
            this.title = name;
            this.calcul = calcul;
        }
        public ModelPrimeNumber Calculation()
        {
            DateTime begin = DateTime.Now;
            simpleNumber = calcul();
            DateTime end = DateTime.Now;
            time = end - begin;
            return this;
        }

        public virtual void Output()
        {
            Console.WriteLine("----------------------------------");
            Console.WriteLine(title);
            Console.WriteLine("Calcul with thread time " + time);
            Console.WriteLine("prime number between 1 - " + max + "(" + simpleNumber.Count + ")");
            Console.WriteLine("----------------------------------");
            //ExtendOutput();
        }
        public virtual void ExtendOutput()
        {
            for (Int32 i = 0; i < simpleNumber.Count; i++)
            {
                Console.Write(simpleNumber[i] + "; ");
            }
            Console.WriteLine("");
            Console.WriteLine("----------------------------------");
        }

    }

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
            while (x <= model.squareMax)
            {
                int currentThread = WaitHandle.WaitAny(waitHandles);
                ThreadPool.QueueUserWorkItem(ProccessSieveOfEratosthenes.Step, new ModelOfSieveOfEratosthenes()
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
            Int64 separation = (model.max - 4) / nbThreads;
            if (separation % 2 != 0) separation--;
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
                ThreadPool.QueueUserWorkItem(ProcessMerge.MergePrimer, sieves[j]);
            }
            WaitHandle.WaitAll(waitHandles);
            for (Int32 j = 0; j < nbThreads; j++)
            {
                if (sieves[j].addedPrime != null)
                    res.AddRange(sieves[j].addedPrime);
            }
            return res;
        }
    }



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
            for (Int64 i = sieve.start; i < sieve.end; i += 2)
            {
                if (!sieve.isPrime[i]) sieve.addedPrime.Add(i);
            }
            are.Set();
        }
    }

    public class ModelOfSieveOfEratosthenes : Sieve
    {
        public Boolean[] isPrime;
        public ModelPrimeNumber model;
    }
    public class Sieve
    {
        public Int64 start;
        public Int64 end;
        public WaitHandle waitHandles;
        public List<Int64> prime;
        public List<Int64> addedPrime;
    }
}
