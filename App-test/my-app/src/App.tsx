import React, { useEffect, useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const apiUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=price&orderBy=ASC';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) { // Verifica se 'data' possui uma propriedade 'products' que é um array
          setProducts(data.products); // Define os produtos com base na propriedade 'products' da resposta
        } else {
          console.error('A resposta da API não está no formato esperado.');
        }
      })
      .catch(error => {
        console.error('Erro ao obter os produtos:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listagem de Produtos</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.photo} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <div>
                <h2>{product.name}</h2>
                <p>Preço: {product.price}</p>
                <p>Descrição: {product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
