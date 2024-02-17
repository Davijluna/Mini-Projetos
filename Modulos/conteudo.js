const linguagens = ["Java", "JavaScript", "Python", "C", "C#", "C++"];
const person = {
  firstName: "Davi",
  lastName: "Jesus de Luna",
  age:36,
  nationality: "Brazilian"
}



const personConvert = Object.keys(person)

// Object.keys(person).forEach(function(element) {
//   console.log(`${element}: ${person[element]}`)
// })


Object.keys(person).forEach((element) => console.log(`${element}: ${person[element]}`))




console.log(personConvert, 'Person !!!')

export {linguagens, person};

