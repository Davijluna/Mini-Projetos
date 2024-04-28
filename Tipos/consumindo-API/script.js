// const fs = require("fs/promises");
// const express = require("express");
// const cors = require("cors");
// const _ = require("lodash");
// const { v4: uuid } = require("uuid");

// const app = express();

// app.get("/outfit", (req, res) => {
//   res.send("This is woring");
// })

// app.listen(3000, () => console.log("API Server is running..."));

// document.addEventListener("DOMContentLoaded", function() {
  // URL do endpoint da API que retorna a lista de produtos
//   

document.addEventListener("DOMContentLoaded", function() {
    // URL do endpoint da API que retorna a lista de produtos
    const apiUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=price&orderBy=ASC';

    // Seleciona o elemento <ul> onde os produtos serão exibidos
    const productList = document.getElementById('product-list');

    // Faz a solicitação GET à API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Exibe os dados no console para ver a estrutura do objeto
            // Verifica se 'data' é um objeto e se possui a propriedade 'products'
            if (typeof data === 'object' && data.hasOwnProperty('products')) {
                // Acessa a propriedade 'products' do objeto 'data'
                const products = data.products;
                // Itera sobre as propriedades do objeto de produtos
                for (const productId in products) {
                    if (Object.prototype.hasOwnProperty.call(products, productId)) {
                        const product = products[productId];
                        // Cria um elemento de lista <li> para cada produto
                        const productElement = document.createElement('li');
                        const productImage = document.createElement('img');
                        productImage.src = product.photo
                        productElement.textContent = `${product.name} - Preço: ${product.price}`;
                       
                        
                        productList.appendChild(productImage)
                        productList.appendChild(productElement);
                    }
                }
            } else {
                console.error('A resposta da API não está no formato esperado.');
            }
        })
        .catch(error => {
            // Exibe uma mensagem de erro se ocorrer algum problema com a solicitação
            console.error('Erro ao obter os produtos:', error);
        });
});

