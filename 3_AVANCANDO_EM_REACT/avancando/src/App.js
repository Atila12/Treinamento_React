import { useState } from 'react';
import ManageData from './components/ManageData';
import './App.css';
import Teste from './assents/OIP.jfif';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';

function App() {
 // const name ="Joaquim";
  const[username] = useState ("Maria");


  const cars = [
    {id: 1, brand: "FERRARI", color: "AMARELA", newCar: true, km: 0 },
    {id: 1, brand: "PORSCHE", color: "PRATA", newCar: false, km: 1000 },
    {id: 1, brand: "FORD", color: "AZUL", newCar: false, km: 144000 },
  ]

  return (
    <div className="App">
        <h1>SISTEMA </h1>
        {/* Imagem em public */}
        <div>
          <img src="baixados.jfif" alt="Paisagem" />
        </div>
        <div>
          <img src={Teste} alt="testantando" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={username} />
        {/* destructuring */}
        <CarDetails brand="VW" km={1000000} color ="Azul" newCar={false} />
        {/* reaproveitamento */}
        <CarDetails brand="FORD" color ="VERMELHA" km={0} newCar={true} />
        <CarDetails brand="FIAT" color ="BRANCO" km={45000} newCar={false} />
         {/* loop em array de objetos */}
         {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
            />
         ))}
         {/* Fragment */}
        <Fragments propFragments ='teste' />

    </div>
  );
}

export default App;
