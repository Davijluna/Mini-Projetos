from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/form')
def form():
    return render_template('form.html')
@app.route('/feedback', methods=['POST'])
def feedback():
    feedback_text = request.form['feedback']
    return f"Obrigado pelo seu feedback: {feedback_text}"

if __name__ == '__main__':
    app.run(debug=True)

print("Teste")