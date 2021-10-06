import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch />
  </BrowserRouter>
);

export default Routes;
