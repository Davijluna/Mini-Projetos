#include <stdio.h>
#include <math.h>

int main() {
    int num, quadrado;
    float raiz;

    printf("\nDigite um número inteiro: ");
    scanf("%d", &num);
    if (num % 2 == 0) {
        raiz = sqrt(num);
        printf("\nA Raiz quandrada é : %.3f \n", raiz);
    }
  

    else {
        // por algum motivo os dois primeiros printf não aparecem no terminal ao rodar o programa.
        raiz = sqrt(num);
        quadrado = num * num;
        printf("[DEBUG] entrou no else\n");
        fflush(stdout);
        printf("O Número é impar.\n");
        printf("O número ao quadrado é : %d \n", quadrado);
        
    }
    return (0);
}