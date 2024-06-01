Algoritmo "ParouImparProcedimentos"

Var
   N: inteiro
procedimento ParouImpar(V: inteiro)

inicio
   se (V%2 = 0) entao
      escreval("O númeto ", V, " é par")
   senao
      escreval("o número ", V, " é impar")
   fimse
fimprocedimento
Inicio
   escreval("Digite um número: ")
   leia(N)
   ParouImpar(N)


Fimalgoritmo