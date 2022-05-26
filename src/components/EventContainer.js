import React from 'react';
import EventsList from './EventList';
import { withEventConsumer } from '../Context';
import Loading from './Loading';

function EventContainer({ context }) {
  const { loading, events, sortedEvents } = context;
  console.log(events);
  console.log(context);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default withEventConsumer(EventContainer);
