using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp_Algorithm.Model
{
    interface IModelPrimeNumber
    {
         
         ModelPrimeNumber Model { get;  }
         List<Int64> Calcul();
    }
}
