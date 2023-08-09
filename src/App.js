import React from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import User from './User/Pages/User';
import NewPlaces from './Places/Pages/NewPlace';
import './App.css';


function App() {
  return (
    <Router>
     <Switch>
     <Route path="/" exact>
      <User />
     </Route>
     <Route path="/places/new">
      <NewPlaces/>
     </Route>
     <Route>
      <Redirect to="/" />
     </Route>
     </Switch>
    </Router>
  );
}

export default App;
