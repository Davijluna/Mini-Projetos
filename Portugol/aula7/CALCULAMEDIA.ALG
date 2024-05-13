Algoritmo "CALCULAMEDIA"

Var
   nota1, nota2, media: real

Inicio
      escreval(" ---------------")
      escreval("  nota do aluno ")
      escreval(" ---------------")
      escreval("  ")
      escreva(" Primeira nota: ")
      leia(nota1)
      escreva(" segunda nota: ")
      leia(nota2)
      media <- (nota1 + nota2) / 2
      se (media >= 7.0) entao
         escreva(" Sua nota é : ", media:5:1, " ESTÁ APROVADO")
      senao
           escreva("sua média é : ", media:5:1, " não está aprovado")
      fimse
Fimalgoritmo