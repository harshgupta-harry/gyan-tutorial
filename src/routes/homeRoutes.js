import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import React from 'react'
import Dashboard from "../screens/Dashboard";

const HomeRoutes = () => {
return(
   
  <BrowserRouter>
  <Switch>
    <Route exact path="/" render={()=>{
        return <Dashboard />
    }} />
  </Switch>
</BrowserRouter>
)
}

export default HomeRoutes;