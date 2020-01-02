import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import axios from 'utils/axios'
import useAuth from 'stores/useAuth'

export default () => {
  const history = useHistory()
  const { setToken } = useAuth()

  const handleLogin = async () => {
    const {
      data: { user },
    } = await axios.get('/login')
    localStorage.setItem('token', user)
    setToken(user)
    history.push('/')
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
