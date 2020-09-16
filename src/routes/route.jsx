import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../components/Home/Home.jsx'
import Tournament from './../components/Tournament/Tournament.jsx'
import Rating from './../components/Rating/Rating.jsx'
import Store from './../components/Store/Store.jsx'
import Settings from './../components/Settings/Settings.jsx'
import Profile from './../components/Profile/Profile.jsx'

const MainContent = () => {
  return(
    <Switch>
      <Route exact path="/tournament" component={Home}/>
      <Route path="/" component={Tournament}/>
      <Route path="/rating" component={Rating}/>
      <Route path="/store" component={Store}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  )
}

export default MainContent