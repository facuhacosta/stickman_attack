import React, { createContext, useEffect, useState } from "react";
import logInService from '../../services/login';

export const GameContext = createContext();

export const GameProvider= (props) => {

  const [user, setUser] = useState(null);
  const [waveNumber, setWaveNumber] = useState(null);
  const [money, setMoney] = useState(null);

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('user'))?.token) {
      try {        
        logInService.updateUser(JSON.parse(window.localStorage.getItem('user'))?.token)
        .then(updatedUser => {
          if (updatedUser.username) {
            setUser(updatedUser)
            window.localStorage.setItem('user', JSON.stringify(updatedUser))
            setIsAuthenticated(true)
          }})
      } catch (error) {
        
      }
    }
    
  }, [])

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setWaveNumber(user.waves);
      setMoney(user.money)
    }
    user
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  }, [user]);
  
  return (
    <GameContext.Provider value={{ waveNumber, setWaveNumber, user, setUser, money, setMoney, isAuthenticated}}>
      {props.children}
    </GameContext.Provider>
  )
}