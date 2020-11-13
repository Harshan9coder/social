import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

function EventForms({setFormOpen}) {
    return (
        <div>
            <Segment clearing>
                <Form>                    
                <Header content="Create an event"/>
                
                <Form.Field>
                    <input type="text" placeholder="Event title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date"/>
                </Form.Field>
                </Form>
            <Button type="submit" floated="right" positive content="Sumit"/>
            <Button onClick={()=>setFormOpen(false)} type="submit" floated="right" content="cancel"/>

            

            </Segment>

        </div>
    )
}

export default EventForms
