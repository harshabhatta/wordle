import React from 'react';
import styles from './Box.module.css';

const Box = (props) => {
  let style;
  if (props.state === 'C') style = styles.box_correct;
  if (props.state === 'E') style = styles.box_exist;
  if (props.state === 'N') style = styles.box_notexist;

  return (
    <div className={`${styles.box_container} ${style}`}>{props.value}</div>
  );
};

export default Box;
