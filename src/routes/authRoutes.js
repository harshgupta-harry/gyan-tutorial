import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import React from 'react'
import Login from '../screens/Login';

const AuthRoutes = () => {
return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={()=>{
          return <Login />
      }} />
    </Switch>
  </BrowserRouter>
)
}

export default AuthRoutes;