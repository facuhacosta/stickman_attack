import React from 'react';
import style from './button.module.scss';
  
export function Button({ onClick, text, primary, secondary, ternary, animation_delay, type}) {

  const buttonClasses = `${style['button']}${primary ? ` ${style['primary']}` : ''}${secondary ? ` ${style['secondary']}` : ''}${ ternary ? ` ${style['ternary']}`: ''}`;

  return (
    <div className={style.container}>
      <button className={buttonClasses} style={{animationDelay: animation_delay}} type={type} onClick={onClick}>{text}</button>
    </div>
  );
}