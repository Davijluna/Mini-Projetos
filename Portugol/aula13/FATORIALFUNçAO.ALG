Algoritmo "FatorialFun�ao"

Var
   N, F: inteiro
funcao fatorial(V: inteiro) :inteiro
var C, R :inteiro
inicio
   R <- 1
   para C <- 1 ate V faca
      R <- R * C
   fimpara
   retorne R

fimfuncao

Inicio
   escreval("Digite um N�mero: ")
   leia(N)
   F <- fatorial(N)
   escreval("O valor de fatorial de ", N, "! � igual � ", F)

Fimalgoritmo