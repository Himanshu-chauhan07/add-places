import React from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import User from './User/Pages/User';
import NewPlaces from './Places/Pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.css';


const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
     <Switch>
     <Route path="/" exact> 
      <User />
     </Route>
     <Route path="/places/new" exact>
      <NewPlaces/>
     </Route>
     <Route>
      <Redirect to="/" />
     </Route>
     </Switch>
     </main>
    </Router>
  );
}

export default App;
