Algoritmo "turma"

Var
     nome: vetor[1..4] de caractere
     N1 : vetor[1..4] de real
     N2 : vetor[1..4] de real
     media: vetor[1..4] de real
     MT, SM : real
     i, tot: inteiro
Inicio
      para i <- 1 ate 4 faca
           escreval("ALUNO ", i)
           escreval("nome: ")
           leia(nome[i])
           escreval("Primeira Nota :")
           leia(N1[i])
           escreval("Segunda Nota :")
           leia(N2[i])
           media[i] <- (N1[i] + N2[i])/2
           SM <- SM + media[i]
      fimpara
             MT <- SM /4
      limpatela
      escreval("LISTAGEM DE ALUNOS")
      escreval("------------------")
      para i <- 1 ate 4 faca
             escreval(nome[i]:15, media[i]:4:1)
             
             se (media[i] > tot) entao
                  tot <- tot + 1
             fimse
      fimpara
      escreval("Nos temos ", tot, " alunos acima de media -> ", MT:4:1)


Fimalgoritmo