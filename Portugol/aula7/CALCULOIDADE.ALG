Algoritmo "CalculoIdade"

Var
   ano, nasc, idade: inteiro
Inicio
      escreva("Em que ano estamos?")
      leia(ano)
      escreva("Em que ano você nasceu?")
      leia(nasc)
      idade <- ano - nasc
      escreva("Em ", ano, " você terá ", idade, " anos")
      se (idade > 21) entao
         escreva(" e você já terá atingido a maioridade")
      fimse
Fimalgoritmo