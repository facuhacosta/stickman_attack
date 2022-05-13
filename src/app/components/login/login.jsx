import React, { useContext, useEffect, useState } from 'react';
import style from './login.module.scss';
import logInService from '../../services/login';
import { Button } from '../button';
import { GameContext } from '../game-context/game-context';
import { useNavigate } from 'react-router-dom';
  
export function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {setUser} = useContext(GameContext);

  const navigate = useNavigate()

  const handleLogIn = async (event) => {
    event.preventDefault();
    
    try {
      const data = await logInService.login({username, password})
      
      if (data.username) {
        window.localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        setUsername('');
        setPassword('');
        navigate('/menu', {replace: true});
      } else {
        setErrorMessage(data.error)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.login}>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          value={username}
          name='username'
          placeholder='Username'
          onChange={({target}) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          name='password'
          placeholder='asd123'
          onChange={({target}) => setPassword(target.value)}
        />
        <p>{errorMessage}</p>
        <Button ternary text='Log In' type='submit' />
      </form>
    </div>
  );
}