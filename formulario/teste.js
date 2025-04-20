// Receber uma string e retornar a ultima letra dessa string.

let letra = "Davi"
function lastLetter(letter) {

   let letterTest = letter
      let letterString;
      for (i = 0; i < letterTest.length; i += 1) {
         lastLetter = letterTest[i]
      }
      console.log(lastLetter)
 
}

lastLetter(letra)