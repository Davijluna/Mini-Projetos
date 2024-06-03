Algoritmo "ParImpar"

Var
   N :inteiro
   R :caractere
   
funcao ImpaPar(V: inteiro) :caractere

inicio
       se (V%2 = 0) entao
          retorne "Par"
       senao
            retorne "Impar"
       fimse

fimfuncao

Inicio
      escreval("Digite um número: ")
      leia(N)
      R <- ImpaPar(N)
      escreval("O número ", N, " é ", R)
      


Fimalgoritmo