Algoritmo "escolhendo pessoas"

Var
   comeco, sexo: caractere
   homem, mulher, idade, cabelo, contMen, contGirl : inteiro
Inicio
   comeco <- "S"
          cabelo <- 0
          homem <- 0
          mulher <- 0
          idade <- 0
          contMen <- 0
          contGirl <- 0
   escreval("========================")
   escreval("    SELETOR DE PESSOAS  ")
   escreval("========================")
   escreval("")

      enquanto ( comeco = "S") faca
         escreva("Qual o sexo? [M/F]")
         leia(sexo)
         se (sexo = "M") entao
            homem <- homem + 1
         fimse
         se (sexo = "F") entao
               mulher <- mulher + 1
         fimse
         
         escreva("Qual idade?")
         leia(idade)
         
         se (idade > 28) entao
              idade <- idade
         fimse
         
         escreval("Qual a cor dos cabelos")
         escreval("------------------------")
         escreval("")
         escreval("[1] preto")
         escreval("[2] loiro")
         escreval("[3] castanho")
         escreval("[4] ruivo")

         leia(cabelo)
         cabelo <- cabelo
         se (sexo = "M") e (idade > 28) e (cabelo = 3) entao
                  contMen <- contMen + 1
         fimse
         se (sexo = "F") e (idade > 28) e (cabelo = 3) entao
                  contGirl <- contGirl + 1
         fimse

            escreval ("Quer continuar [S/N]")
            leia (comeco)
      fimenquanto
         escreval("temos ", contMen, " Homens")
         escreval("temos ", contGirl, " Mulheres")

Fimalgoritmo