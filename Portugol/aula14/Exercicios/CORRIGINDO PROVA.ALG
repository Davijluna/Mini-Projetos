Algoritmo "Corrigindo Prova"

Var
   notas: vetor[1..3] de real
   alunos: vetor[1..3] de caractere
   media: real

   qs, res: vetor[1..5] de caractere
   c, j, i, y: inteiro
Inicio

   escreval("----------------------")
   escreval(" CADASTRO DO GABARITO ")
   escreval("----------------------")
   
   para c <- 1 ate 5 faca
      escreva("Questão ", c, " : ")
      leia(qs[c])
   fimpara
   limpatela
   
   para j <- 1 ate 3 faca
      escreval("---------------------")
      escreval("  ALUNO - ", j)
      escreval("---------------------")
      escreval("Nome: ")
      leia(alunos[j])
      escreval("RESPOSTAS DADAS")
      
      para i <- 1 ate 5 faca
         escreva(" Questão ", i, ": ")
         leia(res[i])
         se (res[i] = qs[i]) entao
            notas[j] <- notas[j] + 2
         fimse
      fimpara
      limpatela
      
   fimpara
   para y <- 1 ate 3 faca
          escreval(alunos[y], "  ", notas[y]:2:1)
   fimpara
   media <- (notas[1] + notas[2] + notas[3]) / 3
             escreval(media:2:1)



Fimalgoritmo