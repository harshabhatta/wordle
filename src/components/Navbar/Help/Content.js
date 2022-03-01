import React from 'react';
import styles from './Content.module.css';
import Box from './Box';

const Content = (props) => {
  let { dark } = props;
  return (
    <div
      className={dark ? styles.content_color_white : styles.content_color_black}
    >
      <h3 className={styles.title}>How to play</h3>
      <p className={styles.description}>
        Guess the <b>WORDLE</b> in six tries.
        <br />
        Each guess must be a valid five-letter word. Hit the enter button to
        submit.
        <br />
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>
      <hr />
      <h3 className={styles.example_title}>Examples</h3>
      <div className={styles.box_container}>
        <Box value='W' state='C' />
        <Box value='E' />
        <Box value='A' />
        <Box value='R' />
        <Box value='Y' />
      </div>
      <p className={styles.box_suggestion}>
        The letter <b>W</b> is in the word and in the correct spot.
      </p>
      <div className={styles.box_container}>
        <Box value='P' />
        <Box value='I' state='E' />
        <Box value='L' />
        <Box value='L' />
        <Box value='S' />
      </div>
      <p className={styles.box_suggestion}>
        The letter <b>I</b> is in the word but in the wrong spot.
      </p>
      <div className={styles.box_container}>
        <Box value='V' />
        <Box value='A' />
        <Box value='G' />
        <Box value='U' state='N' />
        <Box value='E' />
      </div>
      <p className={styles.box_suggestion}>
        The letter <b>U</b> is not in the word in any spot.
      </p>
    </div>
  );
};

export default Content;
