import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import EventsContainer from '../components/EventContainer';

const Events = () => {
  return (
    <>
      <div className="container">
        <Hero hero="carsHeroEvent">
          {' '}
          <Banner
            title="Events"
            subtitle="Retrouvez tous nos évènements"
          ></Banner>
        </Hero>
      </div>

      <EventsContainer />
    </>
  );
};

export default Events;
