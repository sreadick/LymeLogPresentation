import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Landing from './pages/Landing';
import ClinicianLanding from './pages/ClinicianLanding';
import NotFound from './pages/NotFound';

export class App extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Switch>

          <Route exact path="/" component={Landing}/>
          <Route exact path="/clinicians" component={ClinicianLanding}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
};
