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
         escreva(" Sua nota � : ", media:5:1, " EST� APROVADO")
      senao
           escreva("sua m�dia � : ", media:5:1, " n�o est� aprovado")
      fimse
Fimalgoritmo