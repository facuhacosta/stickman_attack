import React from 'react';
import style from './weapon-card.module.scss';
  
export function WeaponCard({ weapon }) {

  
  return (
    <div className={style['weapon-card']}>
      <div className={style['weapon-image']}>
        <img src={weapon.image} alt={weapon.name} />
      </div>
      <h2 className={style['weapon-name']}>{weapon?.name.charAt(0).toUpperCase() + weapon?.name.slice(1)}</h2>
      <section className={style['weapon-info']}>
        <div className={style['weapon-attr']}>
          <p>Damage:</p>
          <p>{weapon?.damage}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Attack Speed:</p>
          <p>{weapon?.attack_speed}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Bullets:</p>
          <p>{weapon?.bullets}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Value:</p>
          <p>${weapon?.value}</p>
        </div>
      </section>
      <button className={style['weapon-button']}>BUY</button>
    </div>  
  );
}
