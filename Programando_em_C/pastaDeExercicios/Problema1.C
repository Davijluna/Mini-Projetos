// Esvreva um programa que leia um número inteiro e apresente seu antecessor e seu sucessor

#include <stdio.h>

int main() {
    int num, ant, suce;

    printf("Digite um número decimal: ");
    scanf("%d", &num);
    ant = num - 1;
    suce = num + 1;

    printf("\n O sucessor é: %d", suce);
    printf("\n O antecessor é: %d", ant);
    printf("\n");
    return (0);
}