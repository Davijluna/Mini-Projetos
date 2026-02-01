#include <stdio.h>

int main(){
    // variáveis locais.

    int idade;
    char nome[50];

    printf("Digite o seu nome: ");
    scanf("%s", nome);
    
    printf("Digite a sua idade: ");
    scanf("%d", &idade);
    
    // função de seleção de eleitor.

    if (idade >= 16 && idade <= 18 || idade > 65) {
        printf("Eleitor Facultativo");
    }
    else if (idade < 16) {
        printf("Não Eleitor");
    }
    else if(idade > 18 && idade <= 65 ) {
        printf("Eleitor Obrigatório");
    }


    return (0);





}