# Configurando para conexão com gemini.

import google.generativeai as genai
import os 

GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")



food_plate = genai.upload_file(
    path="pratos.jpeg"
)

prompt = ("Pode gerar uma descrição de uma receita com esse ingrediente?")

response = model.generate_content([food_plate, prompt])

print(response.text)
