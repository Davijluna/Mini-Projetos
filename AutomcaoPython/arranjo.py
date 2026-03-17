import os
import shutil


from tkinter.filedialog import askdirectory, askopenfilename


# passta = "/home/davi/Downloads/msc "


directory_path = askdirectory(title="Por favor selecione a pasta")

# lista os diretórios escolhidos
arquivosPastas = directory_path

# Caminho do diretório selecionado 
dir = os.listdir(arquivosPastas)


# Copia arquivo para novo diretório


# os.makedirs(os.path.join(arquivosPastas,),  exist_ok=True)
os.makedirs("pasta_seletora", exist_ok=True)
arquivo_projeto = os.path.dirname(os.path.abspath(__file__))
    
for diretorio in dir:
            arquivo_Origem = arquivosPastas + "/" + diretorio
            arquivo_Destino = arquivo_projeto + "/" + "pasta_seletora"
            final = diretorio[-4:]

            if ".pdf" in final:
                print("contem pdf")
                os.makedirs("pasta_seletora/pdfs", exist_ok=True)
                shutil.move(arquivo_Origem,  arquivo_Destino + "/" + "pdfs") 

            elif ".txt" in final:
                print("contem txt")
                os.makedirs("pasta_seletora/txts", exist_ok=True)
                shutil.move(arquivo_Origem,  arquivo_Destino + "/" + "txts") 
            elif ".jpg" in final:
                print("contem jpg")
                os.makedirs("pasta_seletora/", exist_ok=True)
                shutil.move(arquivo_Origem,  arquivo_Destino + "/" + "jpgs") 
            elif ".png" in final:
                print("contem png")
                os.makedirs("pasta_seletora/pngs", exist_ok=True)
                shutil.move(arquivo_Origem,  arquivo_Destino + "/" + "pngs") 
            else:
                print("não definida a extensão")
                os.makedirs("pasta_seletora/extensão_não_definidas", exist_ok=True)
                shutil.move(arquivo_Origem,  arquivo_Destino + "/" + "extensão_não_definidas") 
                print(final)
