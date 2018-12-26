using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CSharp_Algorithm.Model;

namespace CSharp_Algorithm.Code
{
    public static class ProcessMerge
    {
        public static void MergePrimer(object state)
        {
            ModelOfAtkin sieve = (ModelOfAtkin)state;
            var model = sieve.model;
            AutoResetEvent are = (AutoResetEvent)sieve.waitHandles;
            for (Int64 i = sieve.start; i < sieve.end; i ++)
            {
                if (sieve.isPrime[i]) sieve.addedPrime.Add(i);
            }
            are.Set();
        }
    }
}
