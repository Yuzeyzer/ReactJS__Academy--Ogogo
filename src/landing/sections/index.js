import React from 'react';
import Hero from './hero';
import Destinations from './destinations';
import Courses from './courses';
import Mentors from './mentors';
import { Header } from '../components';
import Modal from '../components/modal';

function Sections() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero Modal={Modal} />
        <Destinations />
        <Courses />
        <Mentors />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Sections;
