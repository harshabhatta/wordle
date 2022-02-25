import React, { useState, useEffect } from 'react';
import styles from './Game.module.css';
import Navbar from './Navbar/Navbar';

const Game = (props) => {
  const [dark, setDark] = useState(false);
  const [help, setHelp] = useState(false);

  useEffect(() => {
    props.darkmode(dark);
  }, [dark]);

  return (
    <div className={styles.game}>
      <Navbar help={setHelp} darkmode={setDark} dark={dark} />
      <hr />
    </div>
  );
};

export default Game;
