Algoritmo "calculoIMC"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
   m, a, imc: real


Inicio
   escreva("Massa em Kg: ")
   leia(m)
   escreva("Metros em altura: ")
   leia(a)
   imc <- m / (a ^ 2)
   escreva("IMC é de: ", imc:5:2)
   se (imc < 17) entao
      escreval("Muito abaixo do peso")
   senao
        se (imc >= 17) e (imc < 18.5) entao
           escreval(" Abaixo do peso")
        senao
             se (imc >= 18.5) e (imc < 25) entao
                escreval(" Peso ideal")
             senao
                  se (imc >= 25) e (imc < 30) entao
                     escreval(" sobrepeso")
                  senao
                       se (imc >= 30) e (imc < 35) entao
                          escreval (" obesidade")
                       senao
                            se (imc >= 35) e (imc < 40) entao
                                 escreval (" Obesidade severa")
                            senao
                                          escreval(" Obesidade morbida")
                            fimse
                       fimse
                  fimse
             fimse
        fimse
   fimse

Fimalgoritmo