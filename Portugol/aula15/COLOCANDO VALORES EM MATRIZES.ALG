Algoritmo "Colocando valores em matrizes"

Var
   m:vetor [1..3, 1..2] de inteiro
   l,c: inteiro

Inicio
      para l <- 1 ate 3 faca
           para c <- 1 ate 2 faca
                escreva("Escreva um valor: ")
                leia(m[l,c])
           fimpara
      fimpara
      
      para l <- 1 ate 3 faca
             para c <- 1 ate 2 faca
                    escreva(m[l,c]:5)
             fimpara
             escreval()
      fimpara

Fimalgoritmo