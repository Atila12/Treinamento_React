import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>CONTROLE DE NOTAS</h2>
      <MyForm user={{
        name: "Atila", 
        email: "atila.ferreira11@gmail.com", 
        bio: "Sou um advogado", 
        role : "admin" }}/>
    </div>
  );
}

export default App;
