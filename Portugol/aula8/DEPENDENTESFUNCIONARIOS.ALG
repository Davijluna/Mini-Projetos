Algoritmo "DependentesFuncionarios"

Var
   nome: caractere
   sal, NSal: real
   dep: inteiro

Inicio
      escreval("Qual o nome do funcion�rio?")
      leia(nome)
      escreval("Qual sal�rio do funcion�rio?")
      leia(sal)
      escreva("Qual a quantidade de depend�ntes?")
      leia(dep)
      escolha dep
                caso 0
                     NSal <- sal + (sal*5/100)
                caso 1, 2, 3
                     NSal <- sal + (sal*10/100)
                caso 4, 5, 6
                     NSal <- sal + (sal*15/100)
                outrocaso
                    NSal <- sal + (sal*18/100)
      fimescolha
      escreva("O novo sal�rio de ", nome," � de R$", Nsal:5:2)

Fimalgoritmo