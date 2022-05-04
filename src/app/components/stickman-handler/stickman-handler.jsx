import React, { useContext, useEffect, useState } from 'react';
import { StickMan } from '../stick-man/stick-man';
import style from './stickman-handler.module.scss';
import { generateWave } from './util-methods';
import { FieldContext } from '../field/field-context';
import { useNavigate } from 'react-router-dom';
  
export function StickmanHandler() {

  const { enemies,enemiesProb, enemies_proximity, wave_size, setPoints, points } = useContext(FieldContext);

  const [wave, setWave] = useState(generateWave(enemiesProb, enemies_proximity, wave_size));

  const navigate = useNavigate();

  useEffect(() => {
    if (wave.every(el => el.status === false)) {
      navigate('/', { replace: true, state: { cameFrom: 'GAME' ,cameWith: 'WIN' }});
    }
  },[wave]);

  const addPoints = (amount, key) => {
    setPoints(prevValue => prevValue + amount);
    setWave(prev => {
      const updatedValue = prev.filter(value => value.key == key)[0]
      updatedValue.status = false
      const updatedWave = [...prev.slice(0, key) , updatedValue , ...prev.slice( key + 1, prev.length)];
      return updatedWave;
    })
  };

  return (
    <div className={style['stickman-handler']}>
      <span>{points}</span>
      {wave.map(enemy => 
        <StickMan
          key={enemy.key}
          id={enemy.key}
          enemy={enemies[enemy.type]}
          damage_recived={25}
          position={enemy.position}
          money_recived={enemies[enemy.type].money_recived}
          animation_delay={enemy.delay}
          onDead={addPoints}
        />
      )}
    </div>
  );
}