import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import PrivatePage from './privatepage';
import NotFound from './404';
import AccessDenied from './401';
// import BrowserRouter from './BrowserRouter';

import { Router } from 'react-router';

import {history} from './BrowserRouter';

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/private" component={PrivatePage} />
      <Route exact path="/accessdenied" component={AccessDenied} />
      <Route component={NotFound} />
      </Switch>
      </Router>
    );
  }
}

export default App;
