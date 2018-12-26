using System;
using System.Collections.Generic;

namespace CSharp_Algorithm.Model
{
    public class ModelPrimeNumber
    {
        public delegate List<Int64> Calcul();
        public List<Int64> simpleNumber;
        public DateTime date;
        public TimeSpan time;
        public Int64 max;
        public String title ;
        public Int64 squareMax;
        public long halfMax;
        public Calcul calcul;
        //public String formatedTime { get { return String.Format("mm:ss.fff tt", time); } }
        public ModelPrimeNumber(String name, Int64 limit, Calcul calcul)
        {
            max = limit;
            squareMax = (Int64)Math.Floor(Math.Sqrt(limit));
            halfMax = max/2;
            this.title = name;
            this.calcul = calcul;
        }
        public ModelPrimeNumber Calculation()
        {
            DateTime begin = DateTime.Now;
            simpleNumber= calcul();
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
                Console.Write(simpleNumber[i]+"; ");
            }
            Console.WriteLine("");
            Console.WriteLine("----------------------------------");
        }
        
    }
}