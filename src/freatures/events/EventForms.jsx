import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

function EventForms({setFormOpen,updateEvent, setEvents, createEvent,seclectedEvent }) {
  const initialValues = seclectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    data: "",
  };
  const [values, setValues] = useState(initialValues);

  function handelSubmit() {
    seclectedEvent ? updateEvent({...seclectedEvent,...values}):
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: "Bob",
      attendees: [],
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    });
    setFormOpen(false);
  }

  function handelInputChange(e) {
    const { name, value } = e.target;
    
    setValues({ ...values, [name]: value });
  }

  return (
    <div>
      <Segment clearing>
        <Form onSubmit={handelSubmit}>
          <Header content={seclectedEvent ? "Edit the event" :"Create an event"} />

          <Form.Field>
            <input
              type="text"
              placeholder="Event title"
              name="title"
              value={values.title}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={values.description}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>

          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>

          <Form.Field>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="Sumit" />
          <Button
            onClick={() => setFormOpen(false)}
            type="submit"
            floated="right"
            content="cancel"
          />
        </Form>
      </Segment>
    </div>
  );
}

export default EventForms;
