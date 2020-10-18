import React from 'react';
import { LoginForm, RegisterForm } from './components';
import Sections from './sections';
import './scss/index.scss';
import { Route } from 'react-router-dom';

function LandingPage() {
  return (
    <React.Fragment>
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/register' component={RegisterForm} />
      <Route exact path='/' component={Sections} />
    </React.Fragment>
  );
}

export default LandingPage;
