Algoritmo "ParouImparProcedimentos"

Var
   N: inteiro
procedimento ParouImpar(V: inteiro)

inicio
   se (V%2 = 0) entao
      escreval("O n�meto ", V, " � par")
   senao
      escreval("o n�mero ", V, " � impar")
   fimse
fimprocedimento
Inicio
   escreval("Digite um n�mero: ")
   leia(N)
   ParouImpar(N)


Fimalgoritmo