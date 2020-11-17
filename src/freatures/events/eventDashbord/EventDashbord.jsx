import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForms from "../EventForms";
import EventList from "./EventList";
import { SampleData } from "../eventDashbord/api/SampleData";

function EventDashbord({ formOpen, setFormOpen,seclectEvent,seclectedEvent }) {
  const [events, setEvents] = useState(SampleData);
  
  function handelCreateEvent(event) {
    setEvents([...events, event]);    
  }

function handelUpdateEvent(updateEvent){
  setEvents(events.map(evt=> evt.id === updaeEvent.id ? updateEvent: evt));
  seclectEvent(null);
  
}

function handelDeleteEvents(eventId){
  setEvents(events.filter(evt => evt.id !== eventId));
}

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList deleteEvents={handelDeleteEvents} events={events} seclectEvent={seclectEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForms
            // formOpen={formOpen}
            
            setEvents={setEvents}
            updateEvent={handelUpdateEvent}
            setFormOpen={setFormOpen}
            createEvent={handelCreateEvent}
            seclectedEvent={seclectedEvent}
            key={seclectedEvent ? seclectedEvent.id :null }
          />
        )}
      </Grid.Column>
    </Grid>
  );
}

export default EventDashbord;
