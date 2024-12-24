import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControllers.js";

const upload = multer({dest: "./upload"})

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());
    // Rota GET para obter todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)

    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
