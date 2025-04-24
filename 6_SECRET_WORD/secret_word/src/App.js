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

const guessesQtd = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQtd);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a radom category(Escolha uma categoria Radom)
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    // pick a radom word (escolha uma palavra radom)
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category }

  };

  // start o Adivinhe a palavra
  const startGame = () => {
    
    // pick word an pick category (escolha a palavra uma categoria de escolha)
    const{word, category} = pickWordAndCategory();

    // create an  array of letters (Crie uma matriz de letras)
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //fill states (estados de preenchimento)

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // (process the latter input) processar a carta input
  const verifyletter =(letter) => {
    
    const normalzedletter = letter.toLowerCase()
    // check if  letter has already been utilized (Verifique se a letra já foi utilizada)
    if(guessedLetters.includes(normalzedletter) || 
    wrongLetters.includes(normalzedletter)
  ){
    return;
  }

    // push guessed letter or remove a guess (Empurre a letra adivinhada ou remova uma palpite)
    if(letters.includes(normalzedletter)) {
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters,
        normalzedletter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters,
        normalzedletter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };


  const clearLettersStates = () => {

    setGuessedLetters([]);
    setWrongLetters([]);

};

//check if guesses ended(Verifique se os palpites terminaram)
  useEffect(() => {

  if(guesses <= 0){
    //reset all states (Redefinir todos os estados)
    clearLettersStates()
    setGameStage(stages[2].name);
  }
 }, [guesses]);

 // check win condition (verifique a condição de vitória)

  useEffect(() => {

    const uniqueLetters = [...new Set(letters)];
    
    // win condition (condição de vitória)
    if(guessedLetters.length === uniqueLetters.length){
      // add score(adicionar pontuação)
      setScore((actualScore) => actualScore == 100)
      
      //restart game with new word (reinicie o jogo com uma nova palavra)
      startGame();
    }

 }, [guessedLetters])


  //restarts the game (restart o jogo)
  const retry =() => {

    setScore(0);
    setGuesses(guessesQtd);
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
        {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
};

export default App;
