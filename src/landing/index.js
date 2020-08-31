import React from 'react';

import { Header, Footer } from './components';
import Sections from './sections';
import './scss/index.scss';

function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <Sections />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
