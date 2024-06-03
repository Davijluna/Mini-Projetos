Algoritmo "ValoresPares"

Var
   val: vetor[1..7] de inteiro
   i, Totpar: inteiro
Inicio
   Totpar <- 0
   para i <- 1 ate 7 faca
      escreval("Digite o ", i, "° valor: ")
      leia(val[i])
   fimpara
   

   para i <- 1 ate 7 faca
      se (val[i]%2 = 0) entao
         Totpar <- Totpar + 1
         escreval("Valor par na posição ", i)
      fimse

   fimpara
    escreval("O total de números pares é ", Totpar)
Fimalgoritmo