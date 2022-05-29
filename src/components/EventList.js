import React from 'react';
import Event from './Event';
import { EventContext } from '../Context';

export default function EventList({ events }) {
  if (events.length === 0) {
    console.log(events);

    return (
      <div className="empty-search">
        <h3>
          Il n'y a malheureusement pas d'événements correspondant à cette
          recherche
        </h3>
      </div>
    );
  }
  return (
    <section className="eventslist">
      <div className="eventslist-center">
        {events.map((item) => {
          return <Event key={item.id} event={item} />;
        })}
      </div>
    </section>
  );
}
