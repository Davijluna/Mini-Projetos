Algoritmo "CalculoIdade"

Var
   ano, nasc, idade: inteiro
Inicio
      escreva("Em que ano estamos?")
      leia(ano)
      escreva("Em que ano voc� nasceu?")
      leia(nasc)
      idade <- ano - nasc
      escreva("Em ", ano, " voc� ter� ", idade, " anos")
      se (idade > 21) entao
         escreva(" e voc� j� ter� atingido a maioridade")
      fimse
Fimalgoritmo