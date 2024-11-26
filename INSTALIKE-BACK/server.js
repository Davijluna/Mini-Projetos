import express from "express";
import routes from "./src/routes/postsRoutes.js";


// Cria uma instância do Express, que é o framework web utilizado
const app = express();
routes(app)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("servidor escutando...");
});


// retirei o rota /posts

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

app.get("/livros", (req, res) => {
    const livros = {
        "titulo": "O senhor dos Anéis",
        "autor": "J.R.R Tolkien",
        "ano": 1954,
        "livro": "gosto muito desse livro"
    }
    try {
        res.status(200).json(livros)
    } catch (error) {
        console.log(error);
        res.status(500).json({mensagem: "Erro ao buscar os livros"})
    }
})
