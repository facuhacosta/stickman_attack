import React, { createContext, useEffect, useState } from 'react'
import logInService from '../../services/login'
import apiService from '../../services/Api'

export const GameContext = createContext()

export const GameProvider = (props) => {
  const [user, setUser] = useState(null)
  const [waveNumber, setWaveNumber] = useState(null)
  const [money, setMoney] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [weapons, setWeapons] = useState([])
  const [currentWeapon, setCurrentWeapon] = useState({ image: 'asd', damage: 25, id: 0 })

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('user'))?.token) {
      try {
        logInService.updateUser(JSON.parse(window.localStorage.getItem('user')).token)
          .then(updatedUser => {
            if (updatedUser.username) {
              setUser(updatedUser)
              window.localStorage.setItem('user', JSON.stringify(updatedUser))
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  useEffect(() => {
    if (user) {
      setWaveNumber(user.waves)
      setMoney(user.money)
    }
    user
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false)
  }, [user])

  useEffect(() => {
    if (weapons.length === 0) {
      apiService.getWeapons()
        .then(newWeapons => {
          setWeapons(newWeapons)
        })
    }
  }, [])

  useEffect(() => {
    if (user && user.weapon === 0) {
      setCurrentWeapon({ image: '', damage: 25, id: 0 })
    } else if (user && weapons.length > 0) {
      setCurrentWeapon(() => {
        const newWeapon = weapons.find(weapon => weapon.id === user.weapon)
        return newWeapon
      })
    }
  }, [user, weapons])

  const handleLogOut = () => {
    setUser(null)
    setWaveNumber(null)
    setMoney(null)
    window.localStorage.removeItem('user')
  }

  console.log(currentWeapon)
  return (
    <GameContext.Provider value={{ waveNumber, setWaveNumber, user, setUser, money, setMoney, isAuthenticated, handleLogOut, weapons, currentWeapon }}>
      {props.children}
    </GameContext.Provider>
  )
}
