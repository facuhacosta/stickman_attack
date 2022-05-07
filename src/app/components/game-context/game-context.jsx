import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider= (props) => {

  const [waveNumber, setWaveNumber] = useState(1);
  
  return (
    <GameContext.Provider value={{waveNumber: waveNumber, setWaveNumber: setWaveNumber}}>
      {props.children}
    </GameContext.Provider>
  )
}