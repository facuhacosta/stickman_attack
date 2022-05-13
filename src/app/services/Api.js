const BASEURL = 'http://localhost:3000/api/';

const getUser = async () => {
  return await fetch(BASEURL + 'user',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data);
};

const getWeapons = async () => {
  return await fetch(BASEURL + 'weapons/list',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      return data
    });
};


export default { getUser, getWeapons };