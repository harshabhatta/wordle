import React, { useState, useEffect } from 'react';
import styles from './Game.module.css';
import Keyboard from './Keyboard/Keyboard';
import Navbar from './Navbar/Navbar';

const Game = (props) => {
  const [dark, setDark] = useState(false);
  const [letter, setLetter] = useState();
  const [letters, setLetters] = useState({});
  const [clicked, setClicked] = useState(0);
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    props.darkmode(dark);
  }, [dark]);

  const keyHandler = (value) => {
    setClicked(clicked + 1);
    setLetter(value);
  };

  return (
    <div className={styles.game}>
      <Navbar darkmode={setDark} dark={dark} />
      <hr />
      <Keyboard
        dark={dark}
        keyHandler={() => {}}
        setLetter={setLetter}
        setClicked={setClicked}
        clicked={clicked}
        changed={changed}
        letters={letters}
      />
    </div>
  );
};

export default Game;
