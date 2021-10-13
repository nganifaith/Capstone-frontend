import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BeachDetails from './pages/BeachDetails';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <div className="PageContent">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Home} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/beach/:id" component={BeachDetails} />
      </Switch>
    </div>

    <Footer />
  </BrowserRouter>
);

export default Routes;
