import React, { useState } from 'react';
import { StickMan } from '../stick-man/stick-man';
import style from './stickman-handler.module.scss';
import { generateWave } from './util-methods';
  
export function StickmanHandler({enemies_proximity, enemies, wave_size}) {

  const [wave, setWave] = useState(generateWave(enemies, enemies_proximity, wave_size));

  return (
    <div className={style['stickman-handler']}>
      {wave.map(enemy => 
        <StickMan
          key={enemy.key}
          enemy_type={enemy.type}
          damage_dealed={25}
          position={enemy.position}
          animation_delay={enemy.delay}
        />
      )}
    </div>
  );
}