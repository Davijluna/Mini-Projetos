Algoritmo "Quantosentre0e10"

Var
   c, v, tot010, SImp: inteiro
Inicio
      tot010 <- 0
      SImp <- 0
      para C <- 1 ate 6 faca
            escreva("Digite um valor: ")
            leia(v)
            
            se (v >= 0) e (v <= 10) entao
            tot010 <- tot010 + 1
                   se (v%2 = 1) entao
                       SImp <- SImp + v
                   fimse
            fimse
      fimpara
      escreval("Ao todo foram ", tot010, "valores entre 0  e 10")
      escreval("Nesse intervalo a soma de todos os impares é de ", SImp)


Fimalgoritmo