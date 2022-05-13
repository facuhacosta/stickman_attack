import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import User from '../../../public/assets/user.png'
import MiniCastle from '../../../public/assets/castlepixelart.png'
import Weapon from '../../../public/assets/weapon.png'
import style from './menu.module.scss';
import { LoadingScreen } from '../loading-screen';
import { GameContext } from '../game-context/game-context';
import { Button } from '../button';
  
export function Menu() {

  const state = useLocation().state
  const [initialData, setInitialData] = useState('FIRSTRENDER');
  const [animationDone, setAnimationDone] = useState(false);
  const { money, waveNumber, user } = useContext(GameContext);
  let navigate = useNavigate()

  useEffect(() => {
    state !== 'null' ? setInitialData(state?.cameWith) : setInitialData('FIRSTRENDER')
  }, [,state]);



  return (
    <div className={style.menu}>
      <div className={style['user-info']}>
        <div className={style['profile']}>
          <img src={User} alt="" />
          <section>
            <h2>{user.username}</h2>
            <p>Money: {money}</p>
            <p>Max Waves: {waveNumber}</p>
          </section>
        </div>
        <div className={style['weapon']}>
          <img src={Weapon} alt="" />
          <section>
            <h2>Weapon Name</h2>
            <p>DMG: 15</p>
            <p>Attack speed: 1.25x</p>
            <p>Bullets: 16</p>
          </section>
        </div>
        <div className={style['castle']}>
          <img src={MiniCastle} alt="" />
          <section>
            <h2>Castle name</h2>
            <p>Defense Points: 1000</p>
            {initialData && <p>{initialData}</p>}
          </section>
        </div>
      </div>
      <div className={style['actions']}>
        <button className={style['button']} onClick={() => navigate('/store', { replace: true })}>STORE</button>
        <button className={style['button']}>EQUIP</button>
        <button className={style['button']} onClick={() => navigate('/field', {replace: true})}>PLAY</button>
      </div>
      <LoadingScreen cameFrom={state?.cameFrom} cameWith={state?.cameWith} />
    </div>
  );
}