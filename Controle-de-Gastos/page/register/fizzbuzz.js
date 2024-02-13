
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

// const baseCount = 6;
// const array = [];

// for (let i = baseCount; i >= 1; i--) {
//     const row = [];
//     for (let j = 1; j <= baseCount; j++) {
//         j < i ? row.push(" ") : row.push("*");
//     }
//     array.push(row.join(""));
// }

// console.log(array)
// array.forEach(row => console.log(row));

// function staircase(n) {
//     let space = '2';
//     let recebtor = [];
    
//     for (let i = 1; i <= n; i +=1) {
//         recebtor+= space
//         for (let x = recebtor.length; x >= 1; x -= 1) {
//             recebtor += "#".repeat(n - 1)
//         }

//         console.log(recebtor, recebtor.length)

//     }
    // for (let y = n; y >= 1; y -= 1) {
    //     let test = recebtor = ' '.repeat(y)
    //     let test2 = recebtor
    //     console.log(test)
    // }

    // for (let y = n ; y > 1; y -= 1) {
    //     recebtor += recebtor.slice(recebtor[y], -1)+'#'
    //     console.log(recebtor, y)
    // }

// }

// staircase(6)

// let total = [0, 1, 3, 4, 6].reduce(function (acc, value) {
//     return acc + value;
// })

// console.log(total)


function miniMaxSum(arr) {
    let max = 0;
    let min = 0;
    let vetor = arr.reduce(function (acc, value) {

        return acc + value;
    }, 0);
   for(let i = 1; i < arr.length; i += 1) {
    let result = vetor - arr[i]
    if (result > max) {
        max = result
    } else if(result < max && result > 0 ) {
        min = result
    }
    console.log( max, min)
   }
}

const array = [426980153, 354802167, 142980735, 968217435, 734892650]
// 1659655705 2484892405
miniMaxSum(array);
