import React, { useContext } from 'react'
import style from './router.module.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Field } from '../field'
import { Store } from '../store'
import { Menu } from '../menu'
import { Login } from '../login'
import { AuthenticatedRoute, NotAuthenticatedRoute, LandingRoute } from './protected-routes'
import { GameContext } from '../game-context/game-context'

export function Router () {
  const { isAuthenticated } = useContext(GameContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path='/'
          element={<LandingRoute auth={{ isAuthenticated }}><div /></LandingRoute>}
        />
        <Route
          path='/login'
          element={
            <NotAuthenticatedRoute auth={{ isAuthenticated }}>
              <Login type='login' />
            </NotAuthenticatedRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <NotAuthenticatedRoute auth={{ isAuthenticated }}>
              <Login type='signup' />
            </NotAuthenticatedRoute>
          }
        />
        <Route
          path='/menu'
          element={
            <AuthenticatedRoute auth={{ isAuthenticated }}>
              <Menu />
            </AuthenticatedRoute>
          }
        />
        <Route
          index
          path='/field'
          element={
            <AuthenticatedRoute auth={{ isAuthenticated }}>
              <Field />
            </AuthenticatedRoute>
          }
        />
        <Route
          index
          path='/store'
          element={
            <AuthenticatedRoute auth={{ isAuthenticated }}>
              <Store />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
