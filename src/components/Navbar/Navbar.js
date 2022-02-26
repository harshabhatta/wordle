import React, { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from './Navbar.module.css';
import Settings from './Settings/Settings';
import Help from './Help/Help';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      className={
        props.dark
          ? styles.navbar_container_white
          : styles.navbar_container_black
      }
    >
      <HelpOutlineIcon onClick={handleOpen} />
      {open && <Help close={handleClose} open={open} dark={props.dark} />}
      <h1 className={styles.title}>WORDLE</h1>
      <Settings darkmode={props.darkmode} dark={props.dark} />
    </section>
  );
};

export default Navbar;
