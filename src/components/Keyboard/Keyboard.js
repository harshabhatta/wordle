import React, { useEffect } from 'react';
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

const Keyboard = (props) => {
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

  useEffect(() => {
    window.addEventListener('keydown', onkeydownHandler);
    return () => {
      window.removeEventListener('keydown', onkeydownHandler);
    };
  });

  return (
    <div className={styles.keyboard_container}>
      {keyboard.map((row, key) => {
        return (
          <div className={styles.keyboard_row} key={key}>
            {row.line.split('').map((value, key) => {
              if (value === '1') {
                return (
                  <Key
                    value='ENTER'
                    getKey={keyHandler}
                    key={key}
                    dark={props.dark}
                  />
                );
              } else if (value === '2') {
                return (
                  <Key
                    value='DEL'
                    getKey={keyHandler}
                    key={key}
                    dark={props.dark}
                  />
                );
              } else {
                return (
                  <Key
                    getKey={keyHandler}
                    value={value}
                    key={key}
                    state={props.letters[value]}
                    dark={props.dark}
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
