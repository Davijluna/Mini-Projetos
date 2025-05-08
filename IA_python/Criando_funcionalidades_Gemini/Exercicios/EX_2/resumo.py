# Configurando para conexão com gemini

import google.generativeai as genai
import os
import os.path
from PyPDF2 import PdfReader


path = './paraResumir.txt'
# configurando a api

genai.configure(api_key=os.environ["GEMINI_API"])

# Escolhendo o modelo a ser usado.

model = genai.GenerativeModel("gemini-1.5-flash")

with open("The PageRank Citation Ranking- Bringing Order to the Web.pdf", "w", encoding="utf-8") as file:
    reader = PdfReader(file)
    texto = ""

    for page in reader.pages:
        text += page.extract_text(path)

    prompt = f"Por favor, faça um resumo consiso de seguinte artigo cientifico:\n{text}"

    response = model.generate_content(prompt)

# teste = PyPDF2.PdfReader(path)


print("Resumo do artigo cientifico:")
print(response.txt)
