Algoritmo "valorespares decrescendo"

Var
   cont, V : inteiro


Inicio
      escreva("Digite um valor: ")
      leia(V)
      se (V%2 = 1) entao
      v <- V -1
      fimse
         para cont <- V ate 0 passo -2 faca
              escreval(cont)
         fimpara

Fimalgoritmo