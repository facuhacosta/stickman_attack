import React, { useEffect, useContext, useRef, useState } from 'react';
import style from './stick-man.module.scss';
import { HealthBar } from '../health-bar';
import { FieldContext } from '../field/field-context';

export function StickMan({ onDead, propStyles, enemy, damage_recived, position, animation_delay, money_recived, id}) {
  const { castleHealth, setCastleHealth, gameOver } = useContext(FieldContext)
  const videoRef = useRef();
  const containerRef = useRef()
  const [health, setHealth] = useState(enemy.health);
  const [isAlive, setIsAlive] = useState(true);
  const [isAttacking, setIsAttacking] = useState(false);
  const [horizontalMax, setHorizontalMax] = useState(window.innerWidth * 0.7)

  useEffect(() => {
    if (health <= 0) {
      setIsAlive(false);
      onDead(money_recived, id);
    }
  },[health]);

  useEffect(()=>{
    window.addEventListener('resize', () => {
      setHorizontalMax(window.innerWidth * 0.5);
      // console.log(horizontalMax);
    });
  }, []);

  const changeSpeed = () => {
    videoRef.current.playbackRate = 1;
  }

  const onClick = () => {
    setHealth(prev => prev - damage_recived);
  }

  const barHealth = () => {
    return ((health/enemy.health)*100);
  }

  const dealDamage = () => {
      setCastleHealth(prev => prev - enemy.damage_dealed);
  }; 

  return (
    <div
      className={`${style['stick-man']}${isAlive ? '' : ` ${style['stick-man-dead']}`}`}
      style={{
        bottom: `${position}%`,
        animationDelay: `${animation_delay}s`,
      }}
      ref={containerRef}
    >
      {isAttacking && <p style={{borderRadius: '50%', width: '5px', height: '5px', backgroundColor: 'red'}} />}
      <HealthBar completed={Math.round(barHealth())} health={enemy.health} />
      <video
        className={style['stick-man-video']}
        style={propStyles}
        ref={videoRef}
        onCanPlay={changeSpeed}
        onClick={() => onClick()}
        onPlaying={() => {
          if (containerRef.current?.getBoundingClientRect().left >= horizontalMax && isAttacking == false) {
            setIsAttacking(true);
          }
          if (castleHealth > 0 && isAttacking && !gameOver) dealDamage()
        }}
        autoPlay
        muted
        loop
        data-testid="stickman-testId"
      >
        <source src={enemy.runingURL} type="video/webm" />
      </video>
    </div>
  );
}