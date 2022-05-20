import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './menu.module.scss'
import { LoadingScreen } from '../loading-screen'
import { GameContext } from '../game-context/game-context'
import { Button } from '../button'
import { UserProfile } from '../user-profile'
import { WeaponDetails } from '../weapon-details'
import { CastleInfo } from '../castle-info'

export function Menu () {
  const state = useLocation().state
  const { money, waveNumber, user, handleLogOut } = useContext(GameContext)
  const navigate = useNavigate()

  return (
    <div className={style.menu}>
      <div className={style['user-info']}>
        <UserProfile user={user} money={money} waveNumber={waveNumber} />
        <WeaponDetails />
        <CastleInfo />
      </div>
      <div className={style.actions}>
        <Button
          className={style.button}
          onClick={() => {
            handleLogOut()
            navigate('/', { replace: true })
          }}
          text='LOG OUT'
          primary
        />
        <Button
          className={style.button}
          onClick={() => navigate('/store', { replace: true })}
          text='STORE'
          primary
        />
        <Button
          className={style.button}
          onClick={() => navigate('/field', { replace: true })}
          text='PLAY'
          primary
        />
      </div>
      <LoadingScreen cameFrom={state?.cameFrom} cameWith={state?.cameWith} />
    </div>
  )
}
