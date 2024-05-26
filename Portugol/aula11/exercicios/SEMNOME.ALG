Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/05/2024
Var
// Seção de Declarações das variáveis 
    saudacao, nome: caractere

Inicio
      escreva("Olâ ")
      leia(saudacao)
      
      se (saudacao <> "ola") entao
           escreval("Você entendeu o que eu digitei pra você ?")
      senao
           escreval("Como é o seu nome?")
           leia(nome)
           escreval("Que bom agora sei o seu nome ", nome," rs...")
      fimse


Fimalgoritmo