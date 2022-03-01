import React, { useEffect, useState } from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';
import styles from './Tile.module.css';

const Tile = (props) => {
  const [bgStyle, setBgStyle] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (props.state === 'C') setBgStyle(styles.tile_correct);
      if (props.state === 'E') setBgStyle(styles.tile_exist);
      if (props.state === 'N')
        setBgStyle(
          props.dark ? styles.tile_notexist_dark : styles.tile_notexist
        );
    }, 125 * props.pos);
  }, [props.state]);

  return (
    <div
      className={`${styles.tile_container} ${bgStyle} ${
        props.dark ? styles.tile_white_color : styles.tile_dark_color
      }`}
    >
      {props.value === 'DEL' ? <BackspaceIcon /> : props.value}
    </div>
  );
};

export default Tile;
