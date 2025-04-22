import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    {name: "Fusca", KM: 100000, COR:"Branco"},
    {name: "Ferrari", KM: 0, COR:"Vermelha"},
    {name: "Gol", KM: 155000, COR:"Cinza"},
    {name: "Golf", KM: 265000, COR:"Azul"},
    {name: "Polo", KM: 366000, COR:"Preto"},
    {name: "Prisma", KM: 456000, COR:"Cinza"},
  ];
  return (
    <div className="App">

      <h1>Feirão de carros</h1>

      <div className="car-container">
           {myCars.map((car) => (
             <Car car={car} />
      ))}
    </div>
  </div>
  );
}
export default App;
