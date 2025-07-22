import './App.css';
// importar os pacotes de react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importando as  paginas 
import Home from "./Pages/Home";
import About from "./Pages/About";
//components
import Navbar from "./Components/Navbar";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
