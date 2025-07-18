from flask import Flask, render_template, request
import os
app = Flask(__name__)
# Rotas básicas
@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)