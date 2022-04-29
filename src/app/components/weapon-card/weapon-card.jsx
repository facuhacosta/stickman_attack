import React from 'react';
import style from './weapon-card.module.scss';
  
export function WeaponCard({ weapon }) {

  
  return (
    <div className={style['weapon-card']}>
        <p>{weapon?.name}</p>
        <p>{weapon?.value}</p>
        <p>{weapon?.attack_speed}</p>
        <p>{weapon?.damage}</p>
    </div>  
  );
}
