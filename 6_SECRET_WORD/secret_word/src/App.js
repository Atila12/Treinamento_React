//CSS
import './App.css';
// REACT
import { useCallback, useEffect, useState } from "react";
//DATA . Lista de palavras.
import { wordsList } from './data/words';
//COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//arrey de Objetos 
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a radom category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    // pick a radom word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category }

  };

  // start o Adivinhe a palavra
  const startGame = () => {
    
    // pick word an pick category
    const{word, category} = pickWordAndCategory();

    // create an  array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //fill states

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // (process the latter input) processar a carta input
  const verifyletter =(letter) => {
    console.log(letter);
  };

  //(restart o jogo ) restarts the game
  const retry =() => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
        <Game 
        verifyletter={verifyletter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} 

        />)}
        {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
};

export default App;
