Algoritmo "ContaNegativo"

Var
   N, C, TodN: inteiro
Inicio
       C <- 1
       TodN <- 0
       repita
             escreva("Digite um numero: ")
             leia(N)
             se (N < 0) então
                TodN <- TodN + 1
             fimse
             C <- C + 1
       ate(C > 5)
       escreva("Foram digitados ", TodN, " valores negativos")

Fimalgoritmo