using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CSharp_Algorithm.Model;

namespace CSharp_Algorithm.Code
{
    public static class ProcessOfAtkin
    {
        public static void Step(Object state)
        {
            ModelOfAtkin sieve = (ModelOfAtkin)state;
            var model = sieve.model;
            //model.isPrime=new bool[model.end-model.start+1];
            AutoResetEvent are = (AutoResetEvent)sieve.waitHandles;
            for (Int64 x = sieve.start; x <= sieve.end; x++)
            {
                Int64 x2 = x * x, x2x3 = x2 * 3, x2x4 = x2 * 4;
                for (Int64 y = 1; y <= model.squareMax; y++)
                {
                    Int64 y2 = y * y;
                    Int64 n = x2x4 + y2;
 
                    if ((n % 12 == 1 || n % 12 == 5) && n <= model.max)
                    {
                        sieve.isPrime[n] = !sieve.isPrime[n];

                    }
                    n = x2x3 + y2;
                    if (n % 12 == 7 && n <= model.max)
                    {
                        sieve.isPrime[n] = !sieve.isPrime[n];
                    }
                    n = x2x3 - y2;
                    if (x > y && n % 12 == 11 && n <= model.max)
                    {
                        sieve.isPrime[n] = !sieve.isPrime[n];
                    }
  
                }

            }
            are.Set();
        }
    }
}
