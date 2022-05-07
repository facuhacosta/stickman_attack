import React from 'react';
import style from './button.module.scss';
  
export function Button({onClick, text, primary, secondary, teceary, animation_delay}) {

  return (
    <div className={style.container}>
      <button className={style['button']} onClick={onClick()}>{text}</button>
    </div>
  );
}