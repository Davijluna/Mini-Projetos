Algoritmo "habilita��o"

Var
   ano, nasc, idade: inteiro

Inicio
      escreval("----------------------------")
      escreval("        HABILITA��O         ")
      escreval("----------------------------")
      escreval(" ")
      escreva("Em que ano estamos?")
      leia(ano)
      escreva("Em que ano voc� nasceu?")
      leia(nasc)
      idade <- ano - nasc
      se (idade >= 18) entao
         escreva("+++  Voc� t�m ", idade, " e est� pronto para tirar habilita��o +++")
      senao
        escreva("voc� t�m ", idade, " n�o pode tirar habilita��o")
      fimse

Fimalgoritmo