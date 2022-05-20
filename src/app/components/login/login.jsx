import React, { useContext, useState } from 'react'
import style from './login.module.scss'
import logInService from '../../services/login'
import { Button } from '../button'
import { GameContext } from '../game-context/game-context'
import { useNavigate } from 'react-router-dom'

export function Login ({ type }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { setUser } = useContext(GameContext)

  const navigate = useNavigate()

  const verifyForm = () => {
    const usernameRegex = /^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9]))(?=.{6,})/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

    let valuesOK = true

    if (!usernameRegex.test(username)) {
      setErrorMessage('Your username can contain letters and numbers, and should be at least 6 characters')
      valuesOK = false
    } else if (!passwordRegex.test(password)) {
      setErrorMessage('Your password should have at least one of each: Upper and lower character, and number.Also be longer than 8 characters')
      valuesOK = false
    } else if (password !== confirmPassword) {
      setErrorMessage('Your password is not the same')
      valuesOK = false
    }

    return valuesOK
  }

  const handleLogIn = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    try {
      let respose
      if (type === 'signup') {
        if (verifyForm()) {
          respose = await logInService.signup({ username, password, confirmPassword })
        }
      } else {
        respose = await logInService.login({ username, password })
      }

      if (respose.username) {
        window.localStorage.setItem('user', JSON.stringify(respose))
        setUser(respose)
        setUsername('')
        setPassword('')
        navigate('/menu', { replace: true })
      } else {
        console.log(respose)
        setErrorMessage(respose.error)
      }
    } catch {
    }
  }

  return (
    <div className={style.login}>
      <form onSubmit={handleLogIn}>
        <input
          type='text'
          value={username}
          name='username'
          placeholder='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='password'
          value={password}
          name='password'
          placeholder='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
        {type === 'signup' &&
          <input
            type='password'
            value={confirmPassword}
            name='confirmPassword'
            placeholder='Verify pasword'
            onChange={({ target }) => setConfirmPassword(target.value)}
          />}
        <p>{errorMessage}</p>
        {type === 'login'
          ? (
            <>
              <Button ternary text='Log In' type='submit' />
              <a onClick={() => {
                setErrorMessage('')
                navigate('/signup', { replace: true })
              }}
              >
                Sign Up
              </a>
            </>
            )
          : (
            <>
              <Button ternary text='Sign Up' type='submit' />
              <a onClick={() => {
                setErrorMessage('')
                navigate('/login', { replace: true })
              }}
              >
                I have an account
              </a>
            </>
            )}
      </form>
    </div>
  )
}
