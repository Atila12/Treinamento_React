import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button onClick={retry}>Resetar de jogo</button>
    </div>
  );
};

export default GameOver;
