using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CSharp_Algorithm.Model;

namespace CSharp_Algorithm.Code
{
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
            var res = new List<Int64>(){2}; 
            isPrime = new bool[model.max];
            Int64 x = 3;
            while ( x <= model.squareMax )
            {
                for (Int64 i = 2*x; i < model.max; i += x)
                {
                    isPrime[i] = true;
                }
                while (isPrime[x+=2]) ;
            }
            for (Int64 p = 3; p < model.max; p+=2)
            {
                if(!isPrime[p]) res.Add(p);
            }
                return res;
        }
    }
}
