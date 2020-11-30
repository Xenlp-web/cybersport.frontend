import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './../components/Home/Home.jsx';
import Tournament from './../components/Tournament/Tournament.jsx';
import Rating from './../components/Rating/Rating.jsx';
import ProfileInfo from "../components/ProfileInfo/ProfileInfo.jsx";
import ProfileSettings from "../components/ProfileSettings/ProfileSettings.jsx";
import ProfileStore from "../components/ProfileStore/ProfileStore.jsx";
import AdminAutoTournaments from "../components/AdminAutoTournaments/AdminAutoTournaments.jsx";
import AdminTournaments from "../components/AdminTournaments/AdminTournaments.jsx";
import AdminAddTournaments from "../components/AdminAddTournaments/AdminAddTournaments.jsx";
import AdminTournamentsParticipants from "../components/AdminTournamentsParticipants/AdminTournamentsParticipants.jsx";
import AdminAddResultsTournaments from "../components/AdminAddResultsTournaments/AdminAddResultsTournaments.jsx";
import AdminUsers from "../components/AdminUsers/AdminUsers.jsx";
import Rules from "../components/Rules/Rules.jsx";
import PageTournament from "../components/PageTournament/PageTournament.jsx";

const MainContent = (props) => {
  const setSingInShow = props.setSingInShow;

  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/tournament" component={Tournament}/>
      <Route exact path="/rating" component={Rating}/>
      <Route exact path="/rules" component={Rules}/>

      <Route exact path='/info' component={ProfileInfo}/>
      <Route exact path='/settings' component={ProfileSettings}/>
      <Route exact path='/store' component={ProfileStore}/>

      <Route exact path='/auto-tournaments' component={AdminAutoTournaments}/>
      <Route exact path='/admin-tournaments' component={AdminTournaments}/>
      <Route exact path='/admin-add-tournaments' component={AdminAddTournaments}/>
      <Route exact path='/tournaments-participant' component={AdminTournamentsParticipants}/>
      <Route exact path='/add-results-tournaments' component={AdminAddResultsTournaments}/>
      <Route exact path='/users' component={AdminUsers}/>

      <Route exact path='/tournament/:id' component={PageTournament}/>
    </Switch>
  )
};

export default MainContent;
