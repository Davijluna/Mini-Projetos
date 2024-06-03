Algoritmo "SocomC"


Var
     nome: caractere
     Soc :vetor[1..10] de caractere
     c, tot: inteiro

Inicio
      tot <- 0
      para c <- 1 ate 10 faca
           escreva("Digite seu nome : ")
           leia(nome)
           
           se (copia(maiusc(nome), 1, 1) = "C") então
                  tot <- tot + 1
                  Soc[tot] <- nome
           fimse
           
      fimpara
      
      limpatela
      escreval("Listagem final")
      para c <- 1 ate tot faca
           escreval(Soc[c])
      fimpara
Fimalgoritmo