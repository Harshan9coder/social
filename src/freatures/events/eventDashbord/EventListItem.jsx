import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAddendee from "./EventListAddendee";

function EventListItem({ event }) {
  console.log(event);
  return (
    <div>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />

              <Item.Content>
                <Item.Header content={event.title} />
                <Item.Description>{event.description}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment>
          <span>
            <Icon name="clock" />
            {event.date}
            <Icon name="marker" />
            {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>

            {event.attendees.map((attende) => (
              <EventListAddendee attende={attende} />
            ))}
            
          </List>
        </Segment>
        <Segment clearing>
          <span>Description of events</span>
          <Button color="teal" floated="right" content="view" />
        </Segment>
      </Segment.Group>
    </div>
  );
}

export default EventListItem;
