import React from 'react';
import style from './health-bar.module.scss';
  
export function HealthBar({ completed, health }) {

  return (
    <div className={style['health-bar']}>
      <div className={style['fillerStyles']} style={{width: `${completed}%`}}>
      </div>
      <span className={style['labelStyles']}>{`${health}`}</span>
    </div>
  );
}