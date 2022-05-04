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

const generateDelay = () => (Math.floor(Math.random() * 10));

export const generateWave = (enemies, enemies_proximity, wave_size) => {
  const wavePreset = [];
  for (let index = 0; index < wave_size; index++) {
    const enemyPreset = generateEnemyType(enemies);
    const positionPreset = generatePosition(enemies_proximity);
    const delayPreset = generateDelay();
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