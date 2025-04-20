// Receber uma string e retornar a ultima letra dessa string.

let letra = "Davi"
function lastLetter(letter) {
   for (i = 0; i < letter.length; i += 1) lastLetter = letter[i]
      console.log(lastLetter)
}

lastLetter(letra)