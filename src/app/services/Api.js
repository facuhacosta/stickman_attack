const BASE_API_URL = 'api/'
const BASE_USER_URL = 'user/'

const getWeapons = async () => {
  return await fetch(BASE_API_URL + 'weapons/list',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
}

const updateUserInVictory = async (token, body) => {
  return await fetch(BASE_USER_URL + 'victory',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
}

const buyWeapon = async (token, body) => {
  return await fetch(BASE_USER_URL + 'buyWeapon',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
}

export default { getWeapons, updateUserInVictory, buyWeapon }
