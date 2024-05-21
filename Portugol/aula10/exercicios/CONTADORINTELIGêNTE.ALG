Algoritmo "contadorInteligênte"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi

Var
   numero, resposta: inteiro


Inicio

  numero <- 0
  
  enquanto (numero <> 3) faca
  
   escreval(" ")
   escreval("")
   escreval("=======================")
   escreval("|         MENU        |")
   escreval("=======================")
   escreval("| [1]  De 1 a 10      |")
   escreval("| [2]  De 10 a 1      |")
   escreval("| [3]     Sair        |")
   escreval("=======================")
   escreval("")
   
   leia(numero)
   
      se (numero = 1) entao
          resposta <- 1
          enquanto (resposta <= 10) faca
                     escreva(resposta, "...")
                     resposta <- resposta + 1
          fimenquanto

      senao
           se (numero = 2) entao
              resposta <- 10
              enquanto (resposta > 0) faca

                       escreva(resposta, "...")
                       resposta <- resposta - 1
              fimenquanto
           fimse
      fimse
   
   fimenquanto
   escreval("")
   escreval("Fim do progama")
Fimalgoritmo