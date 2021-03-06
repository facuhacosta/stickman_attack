import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gif from '../../../public/assets/man.webm' // make it came from prop or context
import { GameContext } from '../game-context/game-context'
import { generateWave } from './create-wave'

export const FieldContext = createContext()

export const FieldProvider = (props) => {
  const [points, setPoints] = useState(0)
  const [castleHealth, setCastleHealth] = useState(1000)
  const [gameOver, setGameOver] = useState(false)
  const enemiesProb = {
    basic: 70,
    powered: 25,
    boss: 5
  }
  const enemies = {
    basic: {
      probability: 70,
      health: 100,
      money_recived: 15,
      damage_dealed: 50,
      runingURL: gif,
      attackingURL: ''
    },
    powered: {
      probability: 25,
      health: 200,
      money_recived: 30,
      damage_dealed: 75,
      runingURL: gif,
      attackingURL: ''
    },
    boss: {
      probability: 5,
      health: 400,
      money_recived: 80,
      damage_dealed: 150,
      runingURL: gif,
      attackingURL: ''
    }
  }
  // fetch('/api/get-enemies/', { body: JSON.stringify({user_wave: props.user.wave})})

  const enemiesProximity = 20
  const { waveNumber, setWaveNumber } = useContext(GameContext)

  const navigate = useNavigate()
  const [wave, setWave] = useState(generateWave(enemiesProb, enemiesProximity, waveNumber))

  useEffect(() => {
    if (castleHealth <= 0 && !gameOver) {
      setGameOver(true)
      setWaveNumber(1)
      castleHealth <= 0 && navigate('/', { replace: true, state: { cameFrom: 'GAME', cameWith: 'GAMEOVER' } })
    }
  }, [castleHealth])

  return (
    <FieldContext.Provider value={{
      enemies,
      points,
      setPoints,
      castleHealth,
      setCastleHealth,
      gameOver,
      wave,
      setWave
    }}
    >
      {props.children}
    </FieldContext.Provider>
  )
}
