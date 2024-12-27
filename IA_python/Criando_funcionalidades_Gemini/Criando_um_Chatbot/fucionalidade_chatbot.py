import google.generativeai as genai
import os
import gradio

# Configure a chave de API
GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
# Escolha o modelo a ser usado
model = genai.GenerativeModel("gemini-1.5-flash")

# Inicie um chat sem parâmetros iniciais
chat = model.start_chat()

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
        uploaded_files.append(uploaded_file_info)

    prompt = [message["text"]]
    prompt.extend(uploaded_files)
    response = chat.send_message(prompt)
    return response.text
# Exiba a resposta
# print(response.text)

chatInterface = gradio.ChatInterface(fn=gradio_wrapper, multimodal=True)
chatInterface.launch()