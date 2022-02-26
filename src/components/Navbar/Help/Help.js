import React from 'react';
import Content from './Content';
import styles from './Help.module.css';
import Modal from '@mui/material/Modal';

const Help = (props) => {
  const { open, dark } = props;
  return (
    <Modal open={open} onClose={props.close}>
      <div
        className={`${styles.help_container} ${
          dark ? styles.bg_color_black : styles.bg_color_white
        }`}
      >
        <Content dark={dark} />
      </div>
    </Modal>
  );
};

export default Help;
