import React from 'react';
import Hero from './hero';
import Destinations from './destinations';
import Courses from './courses';
import Mentors from './mentors';
import { Header } from '../components';

function Sections() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Courses />
        <Mentors />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Sections;
