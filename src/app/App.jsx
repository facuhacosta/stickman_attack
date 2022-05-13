import React from 'react';
import Style from './app.module.scss';
import { GameProvider } from './components/game-context/game-context';
import { Router } from './components/router';


function App() {

  return (
    <div className={Style.app}>
      <GameProvider>
        <Router/>
      </GameProvider>
    </div>
  );
};

export default App;