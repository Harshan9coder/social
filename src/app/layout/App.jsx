import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashbord from "../../freatures/events/eventDashbord/EventDashbord";
import Userdata from "../../freatures/events/eventDashbord/Userdata";
import "../layout/style.css";
import Navbar from "./navBarMenu/Navbar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [seclectedEvent, setSelectEvent] = useState(null);

  function handelSelctEvent(event) {
    setSelectEvent(event);
    setFormOpen(true);
  }

  function handelCreateFromOpen() {
    setSelectEvent(null);
    setFormOpen(true);
 
  }

  return (
    <div>
      <Navbar setFormOpen={handelCreateFromOpen } />
      <Container className="main">
        <EventDashbord formOpen={formOpen}
         setFormOpen={setFormOpen} 
        seclectedEvent={seclectedEvent}
        seclectEvent={handelSelctEvent}
        setSelectEvent={seclectedEvent}
        />
        <Userdata />
      </Container>
    </div>
  );
}
export default App;
