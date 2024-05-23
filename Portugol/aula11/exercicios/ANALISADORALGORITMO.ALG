Algoritmo "analisadoralgoritmo"

Var

  C, soma, n1, porV, nulo, pares : inteiro
Inicio
           pares <- 0
           porV <- 0
           nulo <- 0
           soma <- 0
      para C <- 1 ate 5 faca
           escreval("Digige o ", C,"° valor")
           leia(n1)
           soma <- soma + n1
           se (n1%5 = 0) entao
                porV <- porV + 1
           fimse
           se (n1 = 0) entao
                nulo <- nulo + 1
           fimse
           se (n1%2 = 0) entao
                pares <- pares + n1
           fimse
      fimpara
      escreval("A soma de todos os valores é ", soma)
      escreval("A média estre os ", C, "valores é ", soma/C)
      escreval("Valores divisiveis por cinco: ", porV)
      escreval("Valores nulos: ", nulo)
      escreval("Soma de todos os valores pares: ", pares)
      
Fimalgoritmo