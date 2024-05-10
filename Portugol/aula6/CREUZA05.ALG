Algoritmo "Creuza05"

Var
   emprestimo, parcelas, valor_das_parcelas, total: real

Inicio
      escreva("Qual o valor do emprestimo ?")
      leia(emprestimo)
      escreva("Quantas parcelas?")
      leia(parcelas)
      total <- (emprestimo * 20) / 100 + emprestimo
      valor_das_parcelas <- total / parcelas
      escreva("Eu tenho ", parcelas, " de R$",valor_das_parcelas)
      

Fimalgoritmo