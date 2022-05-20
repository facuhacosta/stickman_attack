import React, { useContext } from 'react'
import style from './store.module.scss'
import { WeaponCard } from '../weapon-card'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button'
import { GameContext } from '../game-context/game-context'

export function Store () {
  const { weapons, currentWeapon, user, setUser } = useContext(GameContext)
  const navigate = useNavigate()

  const updateState = (newUser) => {
    setUser(newUser)
    window.localStorage.setItem('user', JSON.stringify(newUser))
  }
  return (
    <div className={style.store}>
      <div className={style.weapons}>
        {
          weapons.length !== 0
            ? weapons.map(weapon =>
              <WeaponCard
                weapon={weapon}
                key={weapon.id}
                canBuy={!(weapon.id === currentWeapon.id)}
                token={user.token}
                updateState={updateState}
              />
            )
            : ''
        }
      </div>
      {/* <Button onClick={() => {navigate('/', {replace: true, state: {cameWith: 'STORE'}})}}/> */}
      <Button text='GO BACK' ternary onClick={() => { navigate('/', { replace: true, state: { cameWith: 'STORE' } }) }} />
    </div>
  )
}
