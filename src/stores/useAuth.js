import React, { useContext, useState } from 'react'

const authContext = React.createContext()

export const AuthProvider = props => {
  const [token, setToken] = useState(props.token)

  return (
    <authContext.Provider value={{ token, setToken }}>
      {props.children}
    </authContext.Provider>
  )
}

export default () => useContext(authContext)
