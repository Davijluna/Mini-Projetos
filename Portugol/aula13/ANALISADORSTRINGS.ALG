Algoritmo "AnalisadorStrings"

Var
   N: caractere
   C: inteiro

Inicio
      escreval("Digite um nome: ")
      leia(N)
      escreval("Total de letras do seu nome: ", Compr(N))
      escreval("Seu nome em Maiusculas: ", Maiusc(N))
      escreval("Seu nome em Minusculas: ", Minusc(N))
      escreval("A primeira letra do seu nome � : ", Copia(N, 1, 1))
      escreval("A ultima letra do seu nome � : ", Copia(Maiusc(N), Compr(N), 1))
      escreval("A posi��o da letra A em seu nome � : ", Pos("a", N))
      escreval("O c�digo da letra A � : ", Asc("A"))
      escreval("A letra de c�digo 65 � : ", carac(65))
      
      Para C <- Compr(N) ate 1 passo -1 faca
             escreval(Copia(Maiusc(N), C, 1))
      fimpara

Fimalgoritmo