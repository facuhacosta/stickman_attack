import React, { useState, useEffect } from 'react';
import style from './store.module.scss';
import { WeaponCard } from '../weapon-card';
import { useNavigate } from 'react-router-dom';
  
export function Store() {

  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className={style.store}>
      {
        data.length != 0 ? data.map(weapon => <WeaponCard weapon={weapon} key={weapon.id} />) : ''
      }

      <button onClick={() => navigate('/', {replace: true, state: {cameWith: 'STORE'}})}>GO BACK</button>
    </div>
  );
}