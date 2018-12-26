using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CSharp_Algorithm.Model
{
    public class Sieve
    {
        public Int64 start;
        public Int64 end;
        public WaitHandle waitHandles;
        public List<Int64> prime;
        public List<Int64> addedPrime;
    }
}
