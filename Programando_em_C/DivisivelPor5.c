#include <stdio.h>

int num;

int main() {
    printf("Digite um número : \n");
    scanf("%d", &num);

    if (num % 5 == 0) {
        printf("É divisivel por cinco o número %d", num);
    } else {
        printf("não é divisivel por cinco o número %d", num);
    }

    return (0);
}