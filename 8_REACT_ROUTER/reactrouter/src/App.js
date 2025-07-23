import './App.css';

// importar os pacotes de react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/Navbar";

//importando as  paginas 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from './Pages/Product';
import Info from './Pages/info';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
        {/* links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
