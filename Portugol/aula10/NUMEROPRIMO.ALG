Algoritmo "NumeroPrimo"

Var
   C, N, conteDiv : inteiro
Inicio
      C <- 1
      escreva("Digite um n�mero")
      leia(N)
      
      repita
            //escreval(C)
            se (N % C = 0) entao
               conteDiv <- conteDiv + 1
            fimse
            C <- C + 1
      ate(C > N)
     // escreval("Ao todo existe ", conteDiv," valores divisiveis")
     se (conteDiv > 2) entao
        escreval(N, " n�o � um numero primo")
     senao
          escreva(N, " � primo")
     fimse

Fimalgoritmo