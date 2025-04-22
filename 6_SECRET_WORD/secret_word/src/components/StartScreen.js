import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Adivinhe a palavra</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>Vamos lá</button>
    </div>
  )
}

export default StartScreen;
