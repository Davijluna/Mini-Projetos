Algoritmo "calculoIMC"

Var
   m, a, imc: real


Inicio
   escreva("Massa em Kg: ")
   leia(m)
   escreva("Metros em altura: ")
   leia(a)
   imc <- m / (a ^ 2)
   escreva("IMC � de: ", imc:5:2)
   se (imc >= 18.5) e (imc < 25) entao
      escreva(" Parab�ns voc� est� no seu peso ideal")
   senao
       escreva(" Voc� n�o est� na faixa de peso ideal")
   fimse
Fimalgoritmo