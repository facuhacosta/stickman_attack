import React from 'react';
import Style from './app.module.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Field } from './components/field';
import { Store } from './components/store';
import { Menu } from './components/menu';
import { GameProvider } from './components/game-context/game-context'

function App() {

  return (
    <div className={Style.app}>
      <BrowserRouter >
        <GameProvider>
        <Routes >
          <Route path='/' element={<Menu />} />
          <Route path='store' element={<Store />} />
          <Route path='game'  element={<Field />} />
        </Routes>  
        </GameProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;