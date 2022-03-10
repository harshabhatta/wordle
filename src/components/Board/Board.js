import React, { useState, useEffect } from 'react';
import Tile from './Tile/Tile';
import words from '../words';
import styles from './Board.module.css';
import Error from '../Error/Error';

const defaultBoard = () => {
  let board = [];
  for (let row = 0; row < 6; row++) {
    board.push([]);
    for (let col = 0; col < 5; col++) {
      board[row].push(['', '']);
    }
  }
  return board;
};

const Board = (props) => {
  const [letters, setLetters] = useState({});
  const [board, setBoard] = useState(defaultBoard());
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [changed, setChanged] = useState(false);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (lost || win) {
      console.log('Game over');
    } else {
      if (props.clicks !== 0) {
        if (props.letter === 'DEL') {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((prev) => {
            prev[row][col === 0 ? 0 : col - 1][0] = '';
            return prev;
          });
        } else {
          setBoard((prev) => {
            if (col < 5) {
              if (props.letter !== 'ENTER') {
                setCol(col + 1);
                prev[row][col][0] = props.letter;
              } else {
                props.error('Words are 5 letters long!');
                setTimeout(() => {
                  props.error('');
                }, 1000);
              }
            } else {
              if (props.letter === 'ENTER') {
                let correctLetters = 0;
                let word = '';
                for (let i = 0; i < 5; i++) {
                  word += board[row][i][0];
                }
                if (words.includes(word.toLowerCase())) {
                  for (let i = 0; i < 5; i++) {
                    if (props.correct[i] === board[row][i][0]) {
                      prev[row][i][1] = 'C';
                      correctLetters++;
                    } else if (props.correct.includes(board[row][i][0])) {
                      prev[row][i][1] = 'E';
                    } else {
                      prev[row][i][1] = 'N';
                    }
                    setRow(row + 1);
                    if (row === 5) {
                      setLost(true);
                      setTimeout(() => {
                        setMessage(`It was ${props.correct}`);
                      }, 750);
                    }
                    setCol(0);
                    setLetters((c) => {
                      c[board[row][i][0]] = board[row][i][1];
                      return c;
                    });
                  }
                  setChanged(!changed);
                  if (correctLetters === 5) {
                    setWin(true);
                    setTimeout(() => {
                      setMessage('You WIN');
                    }, 750);
                  }
                } else {
                  props.error('Word not in dictionary');
                  setTimeout(() => {
                    props.error('');
                  }, 1000);
                }
              }
            }
            return prev;
          });
        }
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);

  return (
    <section className={styles.board_container}>
      {board.map((row, key) => {
        return (
          <div key={key} className={styles.row_container}>
            {row.map((value, key) => (
              <Tile
                key={key}
                value={value[0]}
                state={value[1]}
                pos={key}
                dark={props.dark}
              />
            ))}
          </div>
        );
      })}
      {message && <Error>{lost || win ? message : ''}</Error>}
    </section>
  );
};

export default Board;
