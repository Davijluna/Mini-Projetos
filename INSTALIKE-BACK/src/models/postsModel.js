
import conectorAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados MongoDB usando a string de conexão fornecida no ambiente
const conexao = await conectorAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

async function criarPost(novoPost) {
        const db = conexao.db("imersao-instabytes");
        const colecao = db.collection("posts");
        return colecao.insertOne(novoPost)
}

export { criarPost, getTodosPosts };