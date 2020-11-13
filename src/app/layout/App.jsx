import React,{useState} from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashbord from "../../freatures/events/eventDashbord/EventDashbord";
import '../layout/style.css' ;   
import Navbar from "./navBarMenu/Navbar";

function App() {
  const [formOpen,setFormOpen]=useState(false)
  return (
    <div>
      <Navbar setFormOpen={setFormOpen}/>
      <Container className="main">
      <EventDashbord formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>  
    </div>
  );
}
export default App;
