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

const App = () => (
  <Router>
    <Layout>
      <Switch>
      <Route path="/employee/add-new">
          <EmployeeAddNew />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Layout>
  </Router>
)

export default App
