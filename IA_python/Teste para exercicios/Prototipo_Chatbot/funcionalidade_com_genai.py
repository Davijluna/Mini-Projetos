
from google import genai
from google.genai import types
import os
import gradio as gr

GOOGLE_API_KEY = os.environ["GEMINI_API"]

client = genai.Client(api_key=GOOGLE_API_KEY)


initial_prompt = "Você é um consultor de desenvolvimento de projetos. "
config = types.GenerateContentConfig(system_instruction=initial_prompt)
chat = client.chats.create(model="gemini-2.0-flash", config=config)



def gradio_wrapper(message, _history):
    response = chat.send_message(message)
    return response.text

chatInterface = gr.ChatInterface(gradio_wrapper, type="messages")
chatInterface.launch(share=True)