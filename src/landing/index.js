import React from 'react';

import { Header } from './components';
import Sections from './sections';
import './scss/index.scss';

function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <Sections />
    </React.Fragment>
  );
}

export default LandingPage;
