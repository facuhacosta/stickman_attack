import React from 'react'
import { Button } from '../button'
import style from './weapon-card.module.scss'
import ApiService from '../../services/Api'

export function WeaponCard ({ weapon, canBuy, token, updateState }) {
  const handleBuy = async () => {
    let response
    try {
      response = await ApiService.buyWeapon(token, { weapon })

      if (response.username) {
        updateState(response)
      } else {
        console.log(response.error)
      }
    } catch {
    }
  }

  return (
    <div className={style['weapon-card']}>
      <div className={style['weapon-image']}>
        <img src={weapon.image} alt={weapon.name} />
      </div>
      <h2 className={style['weapon-name']}>{weapon?.name.charAt(0).toUpperCase() + weapon?.name.slice(1)}</h2>
      <section className={style['weapon-info']}>
        <div className={style['weapon-attr']}>
          <p>Damage:</p>
          <p>{weapon?.damage}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Attack Speed:</p>
          <p>{weapon?.attack_speed}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Bullets:</p>
          <p>{weapon?.bullets}</p>
        </div>
        <div className={style['weapon-attr']}>
          <p>Value:</p>
          <p>${weapon?.value}</p>
        </div>
      </section>
      {canBuy ? <Button text='BUY' onClick={() => handleBuy()} secondary /> : <p>purchased</p>}
    </div>
  )
}
