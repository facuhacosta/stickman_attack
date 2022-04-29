import React, { useEffect, useState } from 'react';
import Style from './app.module.scss';
import { StickMan } from './components/stick-man/stick-man';
import { WeaponCard } from './components/weapon-card';
import { StickmanHandler } from './components/stickman-handler';

function App() {
  
  const [data, setData] = useState([]);
  const enemies ={
    basic: 60,
    powered: 30,
    boss: 10
  };

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data));
  },[]);

  return (
    <div className={Style.app}>
      <h1>Hola World</h1>
      {
        data.length != 0 ? data.map(weapon => <WeaponCard weapon={weapon} key={weapon.id}/>) : ''
      }
      <StickmanHandler enemies_proximity={20} enemies={enemies} wave_size={10}/>
    </div>
  );
};

export default App;