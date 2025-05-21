# Configurando para conexão com gemini

import google.generativeai as genai
import os
import gradio
import PyPDF2


path = './paraResumir.txt'
# configurando a api

genai.configure(api_key=os.environ["GEMINI_API"])

# Escolhendo o modelo a ser usado.

model = genai.GenerativeModel("gemini-1.5-flash")

with open("The PageRank Citation Ranking- Bringing Order to the Web.pdf", "rb") as file:
    reader = PyPDF2.PdfReader(file)
    texto = ""

    for page in reader.pages:
        texto += page.extract_text()

    prompt = f"Por favor, faça um resumo consiso de seguinte artigo cientifico:\n{texto}"

    response = model.generate_content(prompt)

# teste = PyPDF2.PdfReader(path)

print("Resumo do artigo cientifico:")
print(response.text)
