import google.generativeai as genai
import os

GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# CURRÍCULO APRIMORADO

# with open("curriculo.txt", "r") as file:

#     curriculum = file.read()

#     prompt = f"Por favor, aprimore o meu currículo para deixá-lo mais assertivo e enfatizando as pontos positivos. Eis o meu currículo:\n{curriculum}"
#     response = model.generate_content(prompt)

#     print(response.text)

# GERANDO RELTÓRIO A PARTIR DE PLANILHAS

# students_spreadsheet = genai.upload_file(path="identificador_estudantes.csv", display_name="Notas do ENEM")

# response = model.generate_content([students_spreadsheet, "Pode gerar um relatório de dois os três paragrafos baseado nesse dados?"])
# print(response.text)



# IDENTIFICADOR DE RAÇAS

# dog_image = genai.upload_file(
#     path="cachorro_golden_retriever.png"
# )

# response = model.generate_content([dog_image, "Pode identificar a raça do cachorro da foto e me dar duas ou três frases de informações a respeito dele? "
#    "De preferência, alguma curiosidade interessante em português, citando a fonte da informação e sempre de um jeito leve e interessante."
# ])

# print(response.text)
