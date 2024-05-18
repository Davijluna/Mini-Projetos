Algoritmo "NumeroPrimo"

Var
   C, N, conteDiv : inteiro
Inicio
      C <- 1
      escreva("Digite um número")
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
        escreval(N, " não é um numero primo")
     senao
          escreva(N, " É primo")
     fimse

Fimalgoritmo