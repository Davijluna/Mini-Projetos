Algoritmo "DetectorPesado"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 

Var
   I :inteiro
   N, Pesado: caractere
   P, mai:real

procedimento Topo()

inicio

   LimpaTela
   escreval("--------------------------")
   escreval("   DETECTOR DE PESADO     ")
   escreval("MAIOR PESO ATE AGORA ",mai," Kg")
   escreval("--------------------------")

fimprocedimento

Inicio

   Topo()
   para I <- 1 ate 5 faca
      escreva("Digite o nome: ")
      leia(N)
      escreva("Digite o peso de ",N, ":")
      leia(P)
      se (P>mai) entao
         mai <- P
         Pesado <- N
      fimse
      Topo()
   fimpara
   Topo()
   escreval("Pessoa mais pesada foi", Pesado, " com ", mai, " quilos.")


   // Se��o de Comandos, procedimento, fun��es, operadores, etc...


Fimalgoritmo