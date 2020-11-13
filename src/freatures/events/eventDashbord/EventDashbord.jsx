import React,{useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventForms from '../EventForms'
import EventList from './EventList'
import {SampleData} from "../eventDashbord/api/SampleData"


function EventDashbord({formOpen,setFormOpen}) {
    const [events,setEvents]=useState(SampleData);
    
    return (
        <Grid>
            <Grid.Column width={10}>
            <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
        {formOpen && <EventForms formOpen={formOpen} setFormOpen={setFormOpen}/>}
            

            </Grid.Column>
        </Grid>
    )
}

export default EventDashbord
