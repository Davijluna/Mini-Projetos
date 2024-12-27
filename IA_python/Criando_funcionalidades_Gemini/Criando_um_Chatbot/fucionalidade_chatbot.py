import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import os
import gradio
import time

# Configure a chave de API
GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
# Escolha o modelo a ser usado
model = genai.GenerativeModel("gemini-1.5-flash")

# Inicie um chat sem parâmetros iniciais
chat = model.start_chat()

# mensagem do curso
# chat.send_message("você é uma IA generariva capas de verificar arquivos, sempre que receber arquivos descreva os arquivos, nunca dizer que não é capas de ler os arquivos pois você é capas")
# Envie uma mensagem para o chat
response = chat.send_message("Você é um consultor de projetos e amigo para quem quer aprender.")

# Envie uma mensagem e obtenha respostas:
def gradio_wrapper(message, _history):
    text = message["text"]
    uploaded_files = []
    # import pdb; pdb.set_trace()

    for files_info in message["files"]:
        file_path = files_info["path"]
        uploaded_file_info = genai.upload_file(file_path)
        # import pdb; pdb.set_trace()

        while uploaded_file_info.state.name == "PROCESSING":
            time.sleep(3)
            uploaded_file_info = genai.get_file(uploaded_file_info.name)
        uploaded_files.append(uploaded_file_info)

    prompt = [message["text"]]
    prompt.extend(uploaded_files)

    try:

        response = chat.send_message(prompt)
    except InvalidArgument as e:
        response = chat.send_message(
            f"O usuário te usando te deu um arquivo para você ler e obteve o erro {e}."
            "pode explicar o que houve e dizer quais tipos de arquivos você"
            "dá suporte pra? Assuma que a pessoa não sabe programação e "
            "não quer ver o erro original. Expleque de forma simples e concisa"
        )
    return response.text
# Exiba a resposta
# print(response.text)

chatInterface = gradio.ChatInterface(fn=gradio_wrapper, multimodal=True)
chatInterface.launch()