#include <stdio.h>

int idade;
float mensalidade;
char nome[50];

int main() {

    printf("Digite seu nome: ");
    scanf("%s", nome);

    printf("Ola %s digite sua idade: ", nome);
    scanf("%d", &idade);

      if (idade <= 0) {
        printf("Idade é inválida.");
        return (0);
    }
// Fazer atualização no "scanf" para "fgets"
    if (idade <= 18) {
        mensalidade = 50.00;
    }
    else if (idade >= 19 && idade <= 29) {
        mensalidade = 70.00;
    }
    else if (idade >= 30 && idade <= 45) {
        mensalidade = 90.00;
    }
    else if (idade >= 46 && idade <= 65) {
        mensalidade = 130.00;
    }
    else {
        mensalidade = 170.00;
    }

    printf("Olá %s, sua mensalidade é de R$%.2f\n", nome, mensalidade);

    return 0;
}
