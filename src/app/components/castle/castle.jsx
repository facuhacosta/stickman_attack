import React, { useContext, useEffect } from 'react';
import style from './castle.module.scss';
import castle from '../../../public/assets/castle.png'
import { HealthBar } from '../health-bar';
import { FieldContext } from '../field/field-context';
import { useNavigate } from 'react-router-dom';

export function Castle() {

  const { castleHealth } = useContext(FieldContext);

  return (
    <div className={style.castle}>
      <div className={style['castle-bar-container']}>
        <HealthBar completed={100} health={castleHealth}/>
      </div>
      <img className={style['castle-image']} src={castle} alt="castle" />
    </div>
  );
}