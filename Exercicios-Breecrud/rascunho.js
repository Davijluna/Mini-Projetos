const values = [1, 2, 3, 4, 5];
let acumulador = 0

let aviso = "no"

let maxValue = 0
let minValue = '';

// 10 14



for(let i = 0; i < values.length; i +=1) {

 acumulador = 0
  for(let y = 0; y < values.length; y += 1 ){
    acumulador += values[y];
    if (y === values.length - 1) {
      aviso = acumulador - values[i]
      if (maxValue < aviso ) {
        maxValue = aviso
      }
      if(typeof minValue != 'number') {
        minValue = aviso
      }
      if (minValue > aviso) {
        minValue = aviso
      }
      
    }

  }
  console.log(minValue, maxValue)
}

// ? código feito pelo ChatGPT: 
// function miniMaxSum(arr) {
//   let max = 0;
//   let min = Infinity;
  
//   for(let i = 0; i < arr.length; i += 1) {
//       let acc = 0;
//       for(let y = 0; y < arr.length; y += 1) {
//           if (y !== i) {
//               acc += arr[y];
//           }
//       }
//       max = Math.max(max, acc);
//       min = Math.min(min, acc);
//   }
//   console.log(min, max);
// }

// // Exemplo de uso:
// miniMaxSum([1, 2, 3, 4, 5]);


// ! Para análisar

 /**

 let acc = 0
 let brack = 'no'
 let max = 0;
 let min = '';
 console.log(min)
 let vetor = arr.reduce(function (acc, value) {
 
     return acc + value;
 }, 0);
 for(let i = 0; i < arr.length; i += 1) {
 let result = vetor - arr[i]
 if (result > max) {
     max = result
 } else if(result < min) {
     min = result
 }
 
 }
 console.log(min, max);
  */





// let maxValue = values[0]
// let minValue = values[0]

// for(let i = 0; i < values.length; i += 1) {
//   if (values[i] > 0 && values[i] > maxValue) {
//    maxValue = values[i]
//     console.log (maxValue)
//   } 
//   if (values[i] < minValue) {
//     minValue = values[i]
//   }
//   console.log('O maior número é', maxValue, 'O menor número é',  minValue)
// }

// for (let x = 0; x < values.length; x += 1) {
//   if (values[x] != 0 && values[x] < minValue + 1) {
//     minValue = values[x]
//     console.log(minValue)
//   }




