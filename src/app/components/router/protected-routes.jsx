import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({auth: { isAuthenticated }, children}) => {
  return isAuthenticated ? children : <Navigate to='/login' replace/>;
}

const NotAuthenticatedRoute = ({auth: { isAuthenticated }, children}) => {
  return isAuthenticated ? <Navigate to='/menu' replace /> : children;
}

const LandingRoute = ({auth: { isAuthenticated }}) => {
  return isAuthenticated ? <Navigate to='/menu' replace /> : <Navigate to='/login' replace />;
}

export { AuthenticatedRoute, NotAuthenticatedRoute, LandingRoute};
