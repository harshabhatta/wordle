import React, { useState, useEffect } from 'react';
import styles from './Key.module.css';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Key = (props) => {
  const [bgStyle, setBgStyle] = useState(styles.bg_light);
  //   props.dark ? `${styles.bg_light}` : `${styles.bg_dark}`;

  //const x = props.value.length === 1 ? 'w-7 sm:w-10 ' : 'p-2 sm:p-4 ';
  const returnKey = () => {
    props.getKey(props.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (props.state === 'C') setBgStyle(styles.bg_correct);
      if (props.state === 'E') setBgStyle(styles.bg_exist);
      if (props.state === 'N')
        setBgStyle(
          props.dark ? styles.bg_notexist_light : styles.bg_notexist_dark
        );
    }, 350);
  }, [props.state]);

  return (
    <button className={`${styles.key} ${bgStyle}`} onClick={returnKey}>
      {props.value === 'DEL' ? <BackspaceIcon /> : props.value}
    </button>
  );
};

export default Key;
