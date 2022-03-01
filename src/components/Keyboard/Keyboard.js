import React, { useState, useEffect } from 'react';
import Key from './Key/Key';
import styles from './Keyboard.module.css';

const alphabets = 'abcdefjhijklmnopqrstuvwxyz';
const keyboard = [
  {
    line: 'QWERTYUIOP',
  },
  { line: 'ASDFGHJKL' },
  { line: '1ZXCVBNM2' },
];

const setDefaultValues = () => {
  let defaultLetters = [];
  alphabets.split('').forEach((i) => {
    defaultLetters[i] = '';
  });
  return defaultLetters;
};

const Keyboard = (props) => {
  //   const [letters, setLetters] = useState(setDefaultValues);
  const keyHandler = (value) => {
    props.keyHandler(value);
  };

  const onkeydownHandler = (event) => {
    if (event.key === 'Enter') {
      props.setLetter('ENTER');
      props.setClicked(props.clicked + 1);
    } else if (event.key === 'Backspace') {
      props.setLetter('DEL');
      props.setClicked(props.clicked + 1);
    } else if (alphabets.includes(event.key.toLowerCase())) {
      props.setLetter(event.key.toUpperCase());
      props.setClicked(props.clicked + 1);
    }
  };

  console.log(props.letters);

  useEffect(() => {
    window.addEventListener('keydown', onkeydownHandler);
    return () => {
      window.removeEventListener('keydown', onkeydownHandler);
    };
  });

  //   useEffect(() => {
  //     console.log(props);
  //     setLetters(props.letters);
  //   }, [props.changed]);

  return (
    <div className={styles.keyboard_container}>
      {keyboard.map((row, key) => {
        return (
          <div className={styles.keyboard_row} key={key}>
            {row.line.split('').map((value, key) => {
              if (value === '1') {
                return <Key value='ENTER' getKey={keyHandler} key={key} />;
              } else if (value === '2') {
                return <Key value='DEL' getKey={keyHandler} key={key} />;
              } else {
                return (
                  <Key
                    getKey={keyHandler}
                    value={value}
                    key={key}
                    state={props.letters[value]}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
