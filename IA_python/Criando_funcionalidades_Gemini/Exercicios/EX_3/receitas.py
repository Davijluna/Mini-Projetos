# Configurando para conexão com gemini.

import google.generativeai as genai
import os 

GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")



food_plate = genai.upload_file(
    path="pratos"
)

prompt = ""


