import React, { useContext, useEffect } from 'react'
import { StickMan } from '../stick-man/stick-man'
import style from './stickman-handler.module.scss'
import { FieldContext } from '../field/field-context'
import { GameContext } from '../game-context/game-context'
import { useNavigate } from 'react-router-dom'
import ApiService from '../../services/Api'

export function StickmanHandler () {
  const { enemies, wave, setWave, setPoints, points } = useContext(FieldContext)
  const { setWaveNumber, setMoney, user, money, waveNumber } = useContext(GameContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (wave.every(el => el.status === false)) {
      setWaveNumber(prev => prev + 1)
      setMoney(prev => prev + points)
    }
  }, [wave])

  useEffect(() => {
    if (wave.every(el => el.status === false)) {
      ApiService.updateUserInVictory(user.token, { money, waveNumber }).then(data => {
        console.log({ money, waveNumber })
        console.log({ data })
        navigate('/', { replace: true, state: { cameFrom: 'GAME', cameWith: 'WIN' } })
      })
    }
  }, [money])

  const addPoints = (amount, key) => {
    setPoints(prevValue => prevValue + amount)
    setWave(prev => {
      const updatedValue = prev.filter(value => value.key === key)[0]
      updatedValue.status = false
      const updatedWave = [...prev.slice(0, key), updatedValue, ...prev.slice(key + 1, prev.length)]
      return updatedWave
    })
  }

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
  )
}
