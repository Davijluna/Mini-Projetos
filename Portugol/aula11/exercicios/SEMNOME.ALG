Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/05/2024
Var
// Se��o de Declara��es das vari�veis 
    saudacao, nome: caractere

Inicio
      escreva("Ol� ")
      leia(saudacao)
      
      se (saudacao <> "ola") entao
           escreval("Voc� entendeu o que eu digitei pra voc� ?")
      senao
           escreval("Como � o seu nome?")
           leia(nome)
           escreval("Que bom agora sei o seu nome ", nome," rs...")
      fimse


Fimalgoritmo