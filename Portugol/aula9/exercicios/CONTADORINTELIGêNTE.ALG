Algoritmo "contadorInteligênte"

Var
   primeiroNumero, segundoNumero, valor: inteiro

Inicio
      escreva("Digite um número: ")
      leia(primeiroNumero)
      
      escreva("Digite outro número: ")
      leia(segundoNumero)
      
      se (primeiroNumero > segundoNumero) entao
         valor <- primeiroNumero
         enquanto (valor >= segundoNumero) faca
                  valor <- valor - 1
                  escreval("Numero: ", valor)
         fimenquanto
      fimse
         se (primeiroNumero < segundoNumero) entao
            valor <- primeiroNumero
            enquanto (valor < segundoNumero) faca
                     valor <- valor + 1
                     escreval("Numero: ", valor)
            fimenquanto
      fimse
Fimalgoritmo