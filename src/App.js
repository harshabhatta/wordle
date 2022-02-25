import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  const darkModeHandler = (dark) => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };
  return (
    <div className={'app'}>
      <Game darkmode={darkModeHandler} />
    </div>
  );
}

export default App;
