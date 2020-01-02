import React from 'react'
import { Button } from 'antd'
import { useHistory, Redirect, useLocation } from 'react-router-dom'
import axios from 'utils/axios'
import useAuth from 'stores/useAuth'

export default () => {
  const history = useHistory()
  const {
    state: { from },
  } = useLocation()
  const { token, setToken } = useAuth()

  const handleLogin = async () => {
    const {
      data: { user },
    } = await axios.get('/login')
    localStorage.setItem('token', user)
    setToken(user)
    history.push(from)
  }

  if (token) {
    return <Redirect to={from} />
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}
