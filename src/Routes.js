import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import BeachDetails from './pages/BeachDetails';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/beach/:id" component={BeachDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
