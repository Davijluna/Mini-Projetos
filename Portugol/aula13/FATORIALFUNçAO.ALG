Algoritmo "FatorialFunçao"

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
   escreval("Digite um Número: ")
   leia(N)
   F <- fatorial(N)
   escreval("O valor de fatorial de ", N, "! é igual á ", F)

Fimalgoritmo