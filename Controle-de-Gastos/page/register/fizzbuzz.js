
// let array = [ 1, 2, 3, 4, 10, 11 ]
// const acc = 0;



// for(let i = 0; i < array.length; i ++) {
//   acc += array[i]
//   console.log(array[i], acc)
// }

// console.log(acc)

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

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//       let line = '';
//       // Adiciona espaços em branco à esquerda
//       for (let j = 1; j <= n - i; j++) {
//           line += ' ';
//       }
//       // Adiciona cerquilhas à direita
//       for (let k = 1; k <= i; k++) {
//           line += '#';
//       }
//       console.log(line);
//   }
// }

// // Exemplo de uso:
// staircase(6);

const baseCount = 6;
const array = [];

for (let i = baseCount; i >= 1; i--) {
    const row = [];
    for (let j = 1; j <= baseCount; j++) {
        j < i ? row.push(" ") : row.push("*");
    }
    array.push(row.join(""));
}

console.log(array)
array.forEach(row => console.log(row));