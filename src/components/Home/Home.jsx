import React from 'react';
import Banner from './Banner';
import About from './About';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import JoinVolunteer from './JoinVolunteer';

const Home = () => {
    return (
        <div>
          <Banner />
          <About />
          <HowItWorks />
          <Impact />
          <JoinVolunteer />
        </div>
      )
    }
export default Home;