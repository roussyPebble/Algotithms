//https://leetcode.com/problems/reverse-integer/

/**
* @param {number} x
* @return {number}
*/


Number.MAX_SAFE_INTEGER = Math.pow(2, 31)-1;
Number.MIN_SAFE_INTEGER = -Number.MAX_SAFE_INTEGER;

var reverse = function(x) {


       MAX_SAFE_INTEGER = Math.pow(2, 31) - 1 ;
       MIN_SAFE_INTEGER = - Math.pow(2, 31);


       if (x >= 0) {
               {
               let length = x.toString().length;
               //var len = Math.ceil(Math.log(x + 1) / Math.LN10);
               let reversedInt = "";
               for (let i = 0; i < length; i++){
                   farRightDigit = x % 10;
                   reversedInt = reversedInt + farRightDigit;
                   x = (x - farRightDigit) / 10;
               }

               {
                   if (reversedInt >= MAX_SAFE_INTEGER) {
                       return 0;
                   }
                   else {
                       return reversedInt;
                   }

               }



               }
       }

       else {
                {
                   x = -x;
                   let length = x.toString().length;
                   //var len = Math.ceil(Math.log(x + 1) / Math.LN10);
                   let reversedInt = "";

                   for (let i = 0; i < length; i++){
                   farRightDigit = x % 10;
                   reversedInt = reversedInt + farRightDigit;
                   x = (x - farRightDigit) / 10;
                   }

                   {
                       if (-reversedInt <= MIN_SAFE_INTEGER  ) {
                       return 0;
                       }
                       else {
                           return -reversedInt;
                       }


                   }



               }
           }


};