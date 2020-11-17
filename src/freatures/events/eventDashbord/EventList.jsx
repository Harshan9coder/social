import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events,seclectEvent,deleteEvents }) {
  return (
    <div>
      {events.map((event) => (
        <EventListItem event={event} key={event.id}
         seclectEvent={seclectEvent} deleteEvents={deleteEvents}/>
      ))}
    </div>
  );
}

export default EventList;
