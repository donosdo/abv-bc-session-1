'use strict'
 
 module.exports = {
 /*This function takes an array and check if the integers are in an arithmetic progression or geometrical progression*/
 aritGeo: (arr) => { 
 
  let n = arr.length;
  let first = arr[0];
  let last = arr[n-1];
  let ratio = (arr[1]/arr[0]);
  let sum = 0;
  for (let i = 0; i < n; ++i){
    sum = sum + arr[i];
  }
  
  let sumArith = (1/2*(first + last)*n);
  
  let d =  Math.pow(ratio, n);
  let num = (1 - ratio);
  let sumGeo = first*(1 - d)/num;
 
  if (sumArith === sum){
    return "Arithmetic"
  }
  if (sumGeo === sum){
    return "Geometric"
  }
  
  if (n == 0){
    return 0
  }
  if (sumGeo !== sum & sumArith !== sum ){
    return -1
  }
} 


 }

