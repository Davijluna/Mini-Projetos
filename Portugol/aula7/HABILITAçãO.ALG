Algoritmo "habilitação"

Var
   ano, nasc, idade: inteiro

Inicio
      escreval("----------------------------")
      escreval("        HABILITAÇÃO         ")
      escreval("----------------------------")
      escreval(" ")
      escreva("Em que ano estamos?")
      leia(ano)
      escreva("Em que ano você nasceu?")
      leia(nasc)
      idade <- ano - nasc
      se (idade >= 18) entao
         escreva("+++  Você têm ", idade, " e está pronto para tirar habilitação +++")
      senao
        escreva("você têm ", idade, " não pode tirar habilitação")
      fimse

Fimalgoritmo