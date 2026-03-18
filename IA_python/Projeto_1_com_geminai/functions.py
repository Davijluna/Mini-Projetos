def atualizar_status_pedido (user_id: str, tipo_pedido: str): # para atualizar o status 
    print("atualizou status !!!")
    return {"user_id": user_id, "tipo_pedido": tipo_pedido}

def registrar_reclamacao (user_id: str, status_reclamacao: str): # registrar reclamação.
    print("registrou a reclamação")
    return {"user_id": user_id, "status_reclamacao": status_reclamacao}

def gerar_cupom_desconto(user_id: str, tipo_cupom): # enviar o código ao cliente.
    print("cupom de desconto gerado")
    return {"user_id": user_id, "tipo_cupom": tipo_cupom}


