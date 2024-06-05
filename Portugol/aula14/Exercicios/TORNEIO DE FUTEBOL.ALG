Algoritmo "Torneio de Futebol"

Var
   time : vetor[1..3] de caractere
   c, j, n: inteiro

Inicio
      escreval("------------------------")
      escreval(     "CAMPEONATO FUTEBOL" )
      escreval("------------------------")
      para c <- 1 ate 3 faca
             escreva("Digite o ", c, "° time: ")
             leia(time[c])
      fimpara
      LimpaTela
      
      escreval("------------------------")
      escreval("   TABELAS DE PARTIDAS  ")
      escreval("------------------------")
      para c <- 1 ate 3 faca
           para j <- 1 ate 3 faca
            se (time[c] <> time[j]) entao
                escreval(time[c]:15," [ ]    X    [ ]  ", time[j])
            fimse
           fimpara
          // para n <- 3 - 1 ate 2 faca
                //  escreval(time[c], " X ", time[n])
          // fimpara
      fimpara

Fimalgoritmo