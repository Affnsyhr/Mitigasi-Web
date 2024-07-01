import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../../pages/Login'

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/Register'>
                <Register />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes
