Algoritmo "matrizpar"

Var
   valores: vetor[1..3, 1..3] de inteiro
   l, c, totPar: inteiro
Inicio
      para l <- 1 ate 3 faca
            para c <- 1 ate 3 faca
                     escreva("Digite o valor da posição [", l,",", c, "]: ")
                      leia(valores[l,c])
            fimpara
      fimpara
      
      escreval()
      escreval("MATRIZES: ")
      escreval("----------------------")
      totPar <- 0
      
          para l <-1 ate 3 faca
             para c <- 1 ate 3 faca
                  se (valores[l,c] % 2 = 0) então
                     escreva("{", valores[l,c]:2, "}")
                     totPar <- totPar + 1
                  senao
                    escreva(valores[l ,c]: 4)
                  fimse
             fimpara
                    escreval()
      fimpara

      escreval()
      escreval("Ao todo foram digitados ", totPar, " valores PARES ")
Fimalgoritmo