Algoritmo "Melhor aludo da turma"

Var
   lot, cont: inteiro
   nome, melhorAluno: caractere
   nota, maiorNota : real
Inicio
      escreval("---------------------------")
      escreval("   ESCOLA SANTA PACI�NCIA  ")
      escreval("---------------------------")
      escreval("Quantos alunos t�m a turma")
      leia(lot)
      cont <- 1
      enquanto (cont <= lot) faca
           escreval("nome do aluno", cont)
           leia(nome)
           escreval("nota de ", nome," : ")
           leia(nota)
           
           se (maiorNota < nota) entao
              maiorNota <- nota
             MelhorAluno <- nome
           fimse
           cont <- cont + 1

      fimenquanto
      escreval("Melhor aluno � ", melhorAluno, " com nota ", maiorNota)
Fimalgoritmo