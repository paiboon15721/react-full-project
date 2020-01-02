import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'stores/useAuth'

export default ({ children, ...rest }) => {
  const { token: isAuthenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
