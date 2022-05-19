const BASEURL = 'user/'

const signup = async (body) => {
  return await fetch(BASEURL + 'signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data)
}

const login = async (body) => {
  return await fetch(BASEURL + 'login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data)
}

const updateUser = async (token) => {
  return await fetch(BASEURL + 'login/update',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(data => data)
}

export default { signup, login, updateUser }
