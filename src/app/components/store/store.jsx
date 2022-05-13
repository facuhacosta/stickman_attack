import React, { useState, useEffect } from 'react';
import style from './store.module.scss';
import { WeaponCard } from '../weapon-card';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import apiService from '../../services/Api';
  
export function Store() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiService.getWeapons()
    .then(data => setData(data))
  }, []);

  return (
    <div className={style.store}>
      <div className={style.weapons}>
        {
          data.length !== 0 ? data.map(weapon => <WeaponCard weapon={weapon} key={weapon.id} />) : ''
        }
      </div>
      {/* <Button onClick={() => {navigate('/', {replace: true, state: {cameWith: 'STORE'}})}}/> */}
      <Button text='GO BACK' ternary onClick={() => {navigate('/', {replace: true, state: {cameWith: 'STORE'}})}} />
    </div>
  );
}