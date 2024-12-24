email = {
    "Luan":"luan@gmail.com",
    "Paulo": "paulo@gmail.com",
    "Susana": "suzana@gmail.com"
    }

# print(email)

if "Luan" in email:
    email["Luan"] = "teste"
    print("existe")
    print(email)
else:
    print("não")

print(email)

# email["Paulo"] = "novoemail@gmail.com"
# emailUpdate = email["Paulo"]
# print(emailUpdate)

# emailUpdate = email.get("Davi", "Chave ainda não existe")
# print(emailUpdate)


# email["Susana"] = "MUDAMOS PARA TESTE !!!!!"
# print(email)