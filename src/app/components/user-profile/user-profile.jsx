import React from 'react'
import style from './user-profile.module.scss'
import User from '../../../public/assets/user.png'

export function UserProfile ({ user, money, waveNumber }) {
  return (
    <div className={style['user-profile']}>
      <img src={User} alt='' />
      <section>
        <h2>{user.username}</h2>
        <p>Money: {money}</p>
        <p>Max Waves: {waveNumber}</p>
      </section>
    </div>
  )
}
