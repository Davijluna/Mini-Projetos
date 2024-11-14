import google.generativeai as genai
import os

GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

with open("curriculo.txt", "r") as file:
    curriculum = file.read()

response = model.generate_content(
    f"Pode, por favor, aprimorar o meu currículo para deixar ele mais assertivo e melhor: {curriculum}"
    )

print(response.text)