import React from 'react'
import Router from 'Router'
import { AuthProvider } from 'stores/useAuth'

const token = localStorage.getItem('token')

const App = () => {
  return (
    <AuthProvider token={token}>
      <Router />
    </AuthProvider>
  )
}

export default App
