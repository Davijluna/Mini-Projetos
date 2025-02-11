# Importando as bibliotecas
import google.generativeai as genai
import os
import os.path

path = './documento_ingles.txt'

check_file = os.path.isfile(path)

# os.environ["GRPC_VERBOSITY"] = "ERROR"
# os.environ["GLOG_minloglevel"] = "2"
# configurando a chave de API
# GOOGLE_API_KEY = os.environ.get("GEMINI_API")
genai.configure(api_key=os.environ["GEMINI_API"])
# genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

with open("documento_portugues.txt", "r", encoding="utf-8") as file:
    arquivo = file.read()
    prompt = f"Por favor, traduza o seguinte texto para o inglês:\n{arquivo}"
    response = model.generate_content(prompt)

print(check_file)

if check_file == True:
    print("Documento já existe no diretório.")
else:
    with open("documento_ingles.txt", "w", encoding="utf-8") as file:
        file.write(response.text)
        print("Tradução concluida e salva em 'documento_ingles.txt' .")
