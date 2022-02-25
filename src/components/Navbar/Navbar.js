import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from './Navbar.module.css';
import Settings from './Settings/Settings';

const Navbar = (props) => {
  const helpHandler = () => {
    props.help(true);
  };
  return (
    <section
      className={
        props.dark
          ? styles.navbar_container_white
          : styles.navbar_container_black
      }
    >
      <HelpOutlineIcon onClick={helpHandler} />
      <h1 className={styles.title}>WORDLE</h1>
      <Settings darkmode={props.darkmode} dark={props.dark} />
    </section>
  );
};

export default Navbar;
