import { useState } from 'react';
import ManageData from './components/ManageData';
import './App.css';
import Teste from './assents/OIP.jfif';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
 // const name ="Joaquim";
  const[username] = useState ("Maria");

  const cars = [
    {id: 1, brand: "FERRARI", color: "AMARELA", newCar: true, km: 0 },
    {id: 1, brand: "PORSCHE", color: "PRATA", newCar: false, km: 1000 },
    {id: 1, brand: "FORD", color: "AZUL", newCar: false, km: 144000 },
  ]

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage (msg);
  };

  return (
    <div className="App">
        <h1> Testando Site </h1>
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
           key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
            />
         ))}
         {/* Fragment */}
        <Fragments propFragments ='teste' />
         {/* children */}
         <Container myValue ="testing">
            <p>E este é o conteúdo</p>
         </Container>
         <Container myValue ="testing 2">
            <p>Testando o container</p>
         </Container>
         {/* Executar função */}
         <ExecuteFunction myFunction={showMessage} />
         {/* State lift */}
         <Message msg={message}/>

         <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
