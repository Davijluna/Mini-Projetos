Algoritmo "Partida de Futebol"


Var
   t1, t2, diferenca: inteiro

Inicio
      escreval("--------------------------------")
      escreval("             PARTIDAS           ")
      escreval("--------------------------------")
      
      
      escreva("Quantos gols Corinthians fez? ")
      leia (t1)
      
      
      escreva("Quantos gols S�o Paulo fez? ")
      leia(t2)
      
      // adicionar abs() para proxima vers�o *******
      se (t1 > t2) entao
         diferenca <- t1 -t2
      senao
           se (t1 < t2) entao
              diferenca <- t2 - t1
           fimse
      fimse
      se (diferenca = 0) entao
         escreval("--------------------------------")
         escreval("Diferen�a de : ", diferenca)
         escreval("Empate")
         escreval("--------------------------------")
      senao
           se (diferenca <= 3) e (diferenca >=1) entao
               escreval("--------------------------------")
               escreval("Diferen�a de : ", diferenca)
               escreval("Partida Normal")
               escreval("--------------------------------")
           senao
                se (diferenca >= 4) entao
                    escreval("--------------------------------")
                    escreval("Diferen�a de : ", diferenca)
                    escreval("Goleada")
                    escreval("--------------------------------")
                fimse
           fimse
      fimse
      escreva(diferenca)
      

Fimalgoritmo