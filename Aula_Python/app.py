from flask import Flask, render_template # importando a biblioteca

app = Flask(__name__) # guardando em uma variável a função para usar na próxima linha

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
