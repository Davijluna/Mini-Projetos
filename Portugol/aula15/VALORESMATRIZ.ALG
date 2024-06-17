Algoritmo "valoresMatriz"

Var
   m: vetor[1..4, 1..4] de inteiro
   l, c, sDP, p2l, p2c: inteiro
Inicio
      sDP <- 0
      p2l <- 1
      p2c <- 0
      
      para l <- 1 ate 4 faca
            para c <- 1 ate 4 faca
                 escreval("Digite o valor da posição [", l,",", c, "]: ")
                 leia(m[l,c])
                 se (l = c) entao
                      sDP <- sDP + m[l,c])
                 fimse
            fimpara
      fimpara
      
      para l <- 1 ate 4 faca
             para c <- 1 ate 4 faca
                    escreva(m[l,c]:4)
             fimpara
             escreval()
      fimpara
      
      para c <- 1 ate 4 faca
           p2l <- p2l * m[2, c]
      fimpara
      
      para l <- 1 ate 4 faca
           se (p2c < m[l, 3]) entao
              p2c <- m[l, 3]
           fimse
      fimpara
      
      escreval("A soma dos valores da diagonal Principal é ", sDP)
      escreval("O Produto dos valores da segunda linha é :", p2l)
      escreval("valor maior de coluna 3: ", p2c)

Fimalgoritmo