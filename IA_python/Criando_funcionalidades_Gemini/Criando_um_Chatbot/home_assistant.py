# home_assistant.py
def set_light_values(brightness: int, color_temperature: str) -> dict:
    """
    Ajusta a luminosidade e a temperatura de cor das luzes.
    """
    # Simula o ajuste de luzes
    print("Modificou as luzes")
    return {"brightness": brightness, "color_temperature": color_temperature}
def intruder_alert() -> dict:
    """
    Ativa o alerta de intruso.
    """
    # Simula o alerta de intruso
    print("Intruder alert")
    return {"alert": "Intruder alert activated"}
def start_music(energetic: bool, loud: bool, tempo: int) -> dict:
    """
    Inicia a reprodução de música com as características especificadas.
    """
    print(f"Música tocando!")
    # Simula o início da música
    return {"energetic": energetic, "loud": loud, "tempo": tempo}
def good_morning() -> dict:
    """
    Executa a rotina matinal.
    """
    # Simula a rotina matinal
    print("Desejou um bom dia!!")
    return {"routine": "Good morning routine started"}
__all__ = ["set_light_values", "intruder_alert", "start_music", "good_morning"]