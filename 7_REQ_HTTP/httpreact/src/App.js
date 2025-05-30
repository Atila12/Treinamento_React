import './App.css';
import { useState, useEffect } from  "react";
// custom hook
import { useFetch } from './hooks/useFetch';

// URL base da API
const url = "http://localhost:3000/products"

function App() {
  // salvando os dados 
  const [products, setProducts] = useState([]);

  // custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState ("");

  // resgantando dados.
  //useEffect(() => {
  //  async function fetchData() {
//
  //    const res = await fetch(url);
  //    const data = await res.json();
  //
  //    setProducts(data);
  //
  //  }
  //  fetchData();
  //}, []);

  // adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const product = {
      name,
      price,
    };

  //const res = await fetch(url, {
  //  method: "POST",
  //  headers: {
  //    "Content-Type": "application/json"
  //  },
  //    body: JSON.stringify(product),
  //  });
//
  //  //carregamento dinâmico
  //  const addedProduct = await res.json();
//
  //  setProducts((prevProducts) => [...prevProducts, addedProduct]);
//
  //  //reseta os states, ou limpeza dos inputs
    httpConfig(product, "POST");
  // Refatorando post
    setName("");
    setPrice("");
  };

  // desafio

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*loading*/}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      )}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
            type='text' 
            value={name} 
            name="name" 
            onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input 
            type='number' 
            value={price} 
            name="price" 
            onChange={(e) => setPrice(e.target.value)}/>
          </label>

          {/* state de loading no post */}
          {loading && <input type="submit" disabled valeu="Aguarde" />}
          {error && <p>{error}</p>}
          {!loading && <input type='submit' value="Criar" />}     
        </form>
      </div>
    </div>
  );
}

export default App;
