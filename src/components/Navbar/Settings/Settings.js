import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch } from '@mui/material';
import styles from './Settings.module.css';
import ReplayIcon from '@mui/icons-material/Replay';

const Settings = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = () => {
    props.darkmode(!props.dark);
  };

  const open = Boolean(anchorEl);
  const settingsClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <SettingsIcon onClick={settingsClickHandler} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <FormControlLabel
          className={styles.menu}
          control={<Switch onChange={handleChange} />}
          label='Dark mode'
        />
        <hr />
        <div
          className={styles.new_game_container}
          onClick={() => window.location.reload(false)}
        >
          <ReplayIcon />
          <p>New Game!</p>
        </div>
      </Menu>
    </>
  );
};

export default Settings;
