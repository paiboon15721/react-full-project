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
import PrivateRoute from 'components/PrivateRoute'

export default () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Layout>
        <PrivateRoute path="/test">
          <Test />
        </PrivateRoute>
        <PrivateRoute path="/employee/add-new">
          <EmployeeAddNew />
        </PrivateRoute>
        <PrivateRoute path="/employee">
          <Employee />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Redirect to="/dashboard" />
        </PrivateRoute>
      </Layout>
    </Switch>
  </Router>
)
