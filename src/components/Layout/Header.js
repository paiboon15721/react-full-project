import React from 'react'
import { Layout, Button } from 'antd'
import useAuth from 'stores/useAuth'

const { Header } = Layout

export default () => {
  const { setToken } = useAuth()

  const handleLogout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <Header
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Button type="danger" onClick={handleLogout}>
        Logout
      </Button>
    </Header>
  )
}
