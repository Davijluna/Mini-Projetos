const values = [3, 8, 5, 0, 34, 12]

let maxValue = values[0]
let minValue = values[0]

for(let i = 0; i < values.length; i += 1) {
  if (values[i] > 0 && values[i] > maxValue) {
   maxValue = values[i]
    console.log (maxValue)
  } 
  if (values[i] < minValue) {
    minValue = values[i]
  }
  console.log('O maior número é', maxValue, 'O menor número é',  minValue)
}

// for (let x = 0; x < values.length; x += 1) {
//   if (values[x] != 0 && values[x] < minValue + 1) {
//     minValue = values[x]
//     console.log(minValue)
//   }




