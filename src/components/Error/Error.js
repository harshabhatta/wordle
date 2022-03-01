import React from 'react';
import styles from './Error.module.css';

const Error = (props) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Error;
