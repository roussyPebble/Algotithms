using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp_Algorithm.Model
{
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
}
