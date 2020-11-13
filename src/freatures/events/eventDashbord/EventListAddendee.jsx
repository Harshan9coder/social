import React from 'react'
import { Item, List,Image } from 'semantic-ui-react'
import person from "../../../assests/person.png"

function EventListAddendee({attende}) {
    return (
        
            <List.Item hori>            
            <Image size='mini' circular src={attende.photoURL}/>                
            </List.Item>
        
    )
}

export default EventListAddendee
