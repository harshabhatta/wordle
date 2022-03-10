import React, { useState, useEffect } from 'react';
import Board from './Board/Board';
import styles from './Game.module.css';
import Keyboard from './Keyboard/Keyboard';
import Navbar from './Navbar/Navbar';
import Error from './Error/Error';
import words from './words';

const gameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(gameWord);

const Game = (props) => {
  const [dark, setDark] = useState(false);
  const [letter, setLetter] = useState();
  const [letters, setLetters] = useState({});
  const [clicked, setClicked] = useState(0);
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState('');

  const keyHandler = (value) => {
    setClicked(clicked + 1);
    setLetter(value);
  };

  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue);
    setChanged(!changed);
  };

  useEffect(() => {
    props.darkmode(dark);
  }, [dark]);

  return (
    <>
      {error && <Error>{error}</Error>}
      <div className={styles.game}>
        <Navbar darkmode={setDark} dark={dark} />
        <hr />
        <Board
          letter={letter}
          letters={LettersHandler}
          clicks={clicked}
          error={setError}
          dark={dark}
          correct={gameWord}
        />
        <Keyboard
          dark={dark}
          keyHandler={keyHandler}
          setLetter={setLetter}
          setClicked={setClicked}
          clicked={clicked}
          changed={changed}
          letters={letters}
        />
      </div>
    </>
  );
};

export default Game;
