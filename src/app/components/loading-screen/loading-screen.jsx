import React, { useState } from 'react';
import style from './loading-screen.module.scss';
  
export function LoadingScreen({cameFrom, cameWith}) {

  const [visible, setVisible] = useState(true)
  return (
    <div className={`${style['loading-screen']}${visible ? '' : ` ${style['loading-screen-hidden']}`}`} onAnimationEnd={() => setVisible(false)} >
      {cameFrom === 'GAME' && cameWith && <p>{cameWith}</p>}
    </div>
  );
}