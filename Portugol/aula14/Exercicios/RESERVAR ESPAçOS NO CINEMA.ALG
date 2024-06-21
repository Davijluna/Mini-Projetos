Algoritmo "reservar espaços no cinema"

Var
   cadeira: vetor[1..10]: de  caractere
   c: inteiro

Inicio
      para c <- 1 ate 10 faca
              escreva(" [B", c, "]")
      cadeira <- cadeira + cadeira[c]
      fimpara
      escreval(" ")
      escreval("---------------------------------------------------------------------------")
      escreval("Reserva a cadeira: B" )
      leia(cadeira)

Fimalgoritmo