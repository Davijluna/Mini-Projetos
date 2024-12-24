const array = ["Davi", "Ana", "Maria", "Paulo", "Felipe"];
let recebe = 0;

for(let i = 0; i < array.length; i += 1) {
  recebe = recebe.push(array[i])
  console.log(recebe)
  console.log(array[i]);
}