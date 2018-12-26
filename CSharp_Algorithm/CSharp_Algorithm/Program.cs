using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CSharp_Algorithm.Code;
using CSharp_Algorithm.Model;

namespace CSharp_Algorithm
{
    class Program
    {

        static void Main(string[] args)
        {

            var data = new Data(40000, 2053400, 1534593);
            data = new Data(1000000000, 40000, 40000);
            //data = new Data(40000, 20000,  18093);
            //data = new Data(4, 2, 7);
            Console.WriteLine($"Solution :{new LeetCode.Solution().NthMagicalNumber(10000000, 4000, 4000)}");
            //return;
            DateTime start = DateTime.Now;
            Solution(data);
            Console.WriteLine($"time = {DateTime.Now-start}");
            Console.WriteLine($"---------------------------------------");
            start = DateTime.Now;
            brute_force(data);
            Console.WriteLine($"time   = {DateTime.Now - start}");
        }
        private static void Solution(Data data)
        {
            long N = data.N, A = data.A, B = data.B;
            //long N = 131, A = 100, B = 99; //6534
            //long N = 100, A = 70, B = 30;
            //long N = 40000, A = 20000, B = 18093;
            //long N = 40000, A = 2053400, B = 1534593; //35129902956
            //long N = 100, A = 8000, B = 10000;
            //long N = 10, A = 3, B = 5;
            //long N = 3, A = 100, B = 99;

            double a = Math.Min(A, B);
            double b = Math.Max(A, B);

            if (b % a == 0)
            {
                var d = a * N;
                d = Int32.MaxValue < d ?  d % (10e9 + 7):d;
                Console.WriteLine("Result = " + d);
                return;
            }
            //const long max_const = 100 * 1000 * 1000;
            //long max = (args.Length > 0) ? Convert.ToInt64(args[0]) : max_const;
            //var primeNumbers = new SieveOfAtkin2(max).Model.Calculation();
            long max = (int)Math.Ceiling(Math.Sqrt(a));
            //Console.WriteLine("Max = " + max);
            ModelPrimeNumber primeNumbers;
            if (max < 60)
            {
                primeNumbers = new SieveOfEratosthenes(max).Model.Calculation();
            }
            else
            {
                primeNumbers = new SieveOfEratosthenes2(max).Model.Calculation();
            }

            double a1 = a,b1=b;
            foreach(long i  in primeNumbers.simpleNumber)
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
            var approximation = N / (1/a  + 1/ b  - 1 / z);
            long x = (long) Math.Floor(approximation);
            //Console.WriteLine("approximation= " + approximation + " x = " + x);
            long k, m, n,p,iter=0;
            do
            {
                k = x / (long)a;
                m = x / (long)b;
                n = x / (long)z;
                p = k + m - n;
                if (N == p) break;
                a1 = (k+1) * a;
                b1 = (m+1) * b;
                x = (long)((a1 < b1) ? a1 : b1);
                iter++;
            } while (true);

            long x1 = k * (long)a;
            var validation = (long)(x1 / b) + k - (long)(x1 / z) == N;
            var result = validation ? x1 : m * (long)b;

            //Console.WriteLine($"k={k}, m={m}, n={n}");
            //Console.WriteLine($"a={a}, b={b}, z={z}");
            Console.WriteLine("Result = " +  result );
            
        }

        static private long brute_force(Data data)
        {
            long N = data.N, A = data.A, B = data.B;
            long koef = 1;
            long  a = A < B?A:B;
            long b = A > B ? A : B;
            if (b % a == 0) return a * N;
            long sum = a;
            while (koef < N)
            {
                sum++;
                if (sum % a == 0 || sum % b == 0) koef++;
            }
            Console.WriteLine($"Brute force result = {sum}");
            return sum;
        }
    }
}
