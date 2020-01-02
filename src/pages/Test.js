import React from 'react'
import useAuth from 'stores/useAuth'
import { Redirect } from 'react-router-dom'

export default () => {
  const { token } = useAuth()
  console.log(token)

  return token ? <h1>{String(token)}</h1> : <Redirect to="/login" />
}
