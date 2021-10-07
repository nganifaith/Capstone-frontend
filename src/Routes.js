import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import BeachDetails from './pages/BeachDetails';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beach/:id" component={BeachDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
