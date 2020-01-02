import React from 'react'
import Layout from 'components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import Employee from 'pages/Employee'
import EmployeeAddNew from 'pages/EmployeeAddNew'
import Test from 'pages/Test'
import Login from 'pages/Login'

const App = () => (
  <Router>
    <Route path="/login">
      <Login />
    </Route>
    <Layout>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/employee/add-new">
          <EmployeeAddNew />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Layout>
  </Router>
)

export default App
