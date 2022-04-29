import React, { useRef, useState } from 'react';
import style from './stick-man.module.scss';
import gif from '../../../public/assets/man.webm'
import { HealthBar } from '../health-bar';
  
export function StickMan({handleClick, propStyles, enemy_type, damage_dealed, position, animation_delay}) {
  const videoRef = useRef();
  const [health, setHealth] = useState(() => {
    switch (enemy_type) {
      case 'basic':
        return 100;
      case 'powered':
        return 200;
      case 'boss':
        return 400;
    }
  });
  const [maxHealth, setMaxHealth] = useState(health);

  const changeSpeed = () => {
    videoRef.current.playbackRate = 1;
  }

  const onClick = () => {
    // handleClick()
    setHealth(prev => prev - damage_dealed);
  }

  const barHealth = () => {
    return ((health/maxHealth)*100);
  }

  return (
    <div
      className={style['stick-man']}
      style={{
        bottom: `${position}%`,
        animationDelay: `${animation_delay}s`
      }}
    >
      <HealthBar completed={Math.round(barHealth())} health={health} />
      <video
        className={style['stick-man-video']}
        style={propStyles}
        ref={videoRef}
        onCanPlay={changeSpeed}
        onClick={() => onClick()}
        autoPlay
        muted
        loop
        data-testid="stickman-testId"
      >
        <source  src={gif} type="video/webm" />
      </video>
    </div>
  );
}