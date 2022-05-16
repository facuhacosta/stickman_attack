const BASEURL = 'http://localhost:3000/user/login/';

const login = async (body) => {
  return await fetch(BASEURL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data);
};

const updateUser = async (token) => {
  return await fetch(BASEURL + 'update',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': 'Bearer ' + token,
      },
    })
    .then(res => res.json())
    .then(data => data);
};



export default { login, updateUser };