import React, { useContext } from 'react'
import style from './weapon-details.module.scss'
import { GameContext } from '../game-context/game-context'

export function WeaponDetails () {
  const { currentWeapon } = useContext(GameContext)

  return (
    <div className={style['weapon-details']}>
      {
        currentWeapon &&
          <>
            <img src={currentWeapon.image} alt='' />
            <section>
              <h2>{currentWeapon.name}</h2>
              <p>DMG: {currentWeapon.damage}</p>
              <p>Attack speed: {currentWeapon.attack_speed}</p>
              <p>Bullets: {currentWeapon.bullets}</p>
            </section>
          </>
      }
    </div>
  )
}
