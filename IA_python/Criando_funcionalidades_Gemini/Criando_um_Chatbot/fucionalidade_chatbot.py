import google.generativeai as genai
import os
import gradio as gr

# Configure a chave de API
GOOGLE_API_KEY = os.environ["GEMINI_API"]
genai.configure(api_key=GOOGLE_API_KEY)
# Escolha o modelo a ser usado
model = genai.GenerativeModel("gemini-1.5-flash")

# Inicie um chat sem parâmetros iniciais
chat = model.start_chat()

# Envie uma mensagem para o chat
response = chat.send_message("Você é um consultor de projetos e amigo para quem quer aprender.")

def gradio_wrapper(message, _history):
    response = chat.send_message(message)
    return response.text
# Exiba a resposta
print(response.text)

chatInterface = gr.ChatInterface(gradio_wrapper)
chatInterface.launch()