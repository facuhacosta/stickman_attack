const generatePosition = (enemies_proximity) => {
  return Math.floor(Math.random() * enemies_proximity) * 5;
};

const generateEnemyType = (enemies) => {
  const randomValue = Math.floor(Math.random() * 100);
  let flag = 0;
  let returnValue = ''
  Object.keys(enemies).some(key => {
    flag += enemies[key];
    if (flag > randomValue) {
      returnValue = key
      return key;
    };
  });
  return (returnValue);
};

const generateDelay = (wave_duration) => (Math.floor(Math.random() * 100) * (wave_duration / 100));

const generateWaveSetting = (wave_number) => {
  let wave_size = 2;
  let wave_duration = 15;
  if (wave_number <= 5) {
    wave_size += wave_number * 2
  } else if (wave_number <= 10) {
    wave_size = 10 + ((wave_number - 5) * 4);
    wave_duration += wave_number + 2
  } else if (wave_number <= 20 ) {
    wave_size = 30 + ((wave_number - 10) * 6);
    wave_duration = 25 + (wave_number * 2)
  } else if (wave_number <= 30) {
    wave_size = 90 + ((wave_number - 10) * 4);
    wave_duration = 45 + (wave_number)
  } else  {
    wave_size = 130 + ((wave_number - 10) * 2);
    wave_duration = 60
  }
  return {wave_size, wave_duration};
}

export const generateWave = (enemies, enemies_proximity, wave_number) => {
  const wavePreset = [];
  const { wave_size, wave_duration } = generateWaveSetting(wave_number)
  for (let index = 0; index < wave_size; index++) {
    const enemyPreset = generateEnemyType(enemies);
    const positionPreset = generatePosition(enemies_proximity);
    const delayPreset = generateDelay(wave_duration);
    wavePreset.push({
      key: index,
      type: `${enemyPreset}`,
      position: `${positionPreset}`,
      delay: delayPreset,
      status: true
    });
  };
  return wavePreset;
}