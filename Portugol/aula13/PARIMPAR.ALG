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
      escreval("Digite um n�mero: ")
      leia(N)
      R <- ImpaPar(N)
      escreval("O n�mero ", N, " � ", R)
      


Fimalgoritmo