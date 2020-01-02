import React from 'react'
import { Button } from 'antd'
import axios from 'utils/axios'

export default () => {
  const handleLogin = async () => {
    const { data } = await axios.get('/login')
    localStorage.setItem('token', data.user)
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
