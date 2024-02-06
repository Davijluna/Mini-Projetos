
let array = [ 1, 2, 3, 4, 10, 11 ]
const acc = 0;

for(let i = 0; i < array.length; i ++) {
  acc += array[i]
  console.log(array[i], acc)
}

console.log(acc)

// function fizzBuzz(n) {
//   console.log(n)
//   for (let i = 0; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 ===0 ) {
//       console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//       console.log('Buzz');
//     }
//     else if (i % 5 === 0) {
//       console.log('Fizz')
//     } else {

//       console.log(i)
//     }
//     console.log('!!!!!!!!!!!!!!!!', i)
//   }

// }


// console.log(fizzBuzz(100));