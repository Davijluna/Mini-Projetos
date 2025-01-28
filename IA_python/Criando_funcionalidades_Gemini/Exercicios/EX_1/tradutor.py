# Importando as bibliotecas
import google.gererativeai as genai
import os

# configurando a chave de API
# GOOGLE_API_KEY = os.environ.get("GEMINI_API")
genai.configure(api_key=os.environ["GEMIMI_API"]

# lendo o arquivo em português

with open("documento_portugues.txt", "r") as file:
    arquivo = file.read()
