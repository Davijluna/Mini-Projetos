# number = [2, 3, 6]
# name = ["lasanha", "hotdog", "pastel"]
# vazio = []

# maxNumber = max(number)
# minNumber = min(number)
# lista = list(zip(name, number))
# print(maxNumber)
# print(minNumber)
# print(number)
# print(lista, any(vazio))

# for num in range(10):
#      print(num)

name = input("Qual seu nome? ")

print("Olá", name , "!!!!")

number = int(input("Digite um número "))
antecessor = 0
sucessor = 0

antecessor = number - 1
sucessor = number + 1

print("O sucessor de ", number, "é ", sucessor, " e o antecessor de ", number, " é ", antecessor)