Algoritmo "M�dia de aluno"

Var
   n1, n2, media : real

Inicio

   escreval("Primeira Nota: ")
   leia(n1)
   escreval("Segunda Nota: ")
   leia(n2)
   media <- (n1 + n2) / 2
   se (media <= 10) e (media > 9) entao
      escreval("M�DIA: ", media)
      escreval("APROVADO: A")
   senao
      se (media >= 8) e (media < 8.9) entao
         escreval("M�DIA: ", media)
         escreval("APROVADO: B")
      senao
         se (media >= 7) e (media > 7.9) entao
            escreval("M�DIA: ", media)
            escreval("APROVEITAMENTO: C")
         senao
            se (media >= 6) e (media < 6.9) entao
                escreval("M�DIA: ", media)
                escreval("RECUPERA��O: D")
            senao
                se (media >= 5) e (media < 5.9) entao
                    escreval("M�DIA: ", media)
                    escreval("EM AN�LISE: E")
                senao
                     se (media < 5) entao
                        escreval("M�DIA: ", media)
                        escreval("REPROVADO: F")

                     fimse
                fimse
             fimse
          fimse
       fimse
    fimse



Fimalgoritmo