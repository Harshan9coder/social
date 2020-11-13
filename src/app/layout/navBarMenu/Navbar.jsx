import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import "../img/burgur.png";
import burger from "../../../assests/burgur.png";
function Navbar({setFormOpen}) {
  
  return (
    <Menu className="navmenu" inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src={burger} />
          Re-events
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button onClick={()=> setFormOpen(true)} positive inverted content="Create Events" />
        </Menu.Item>
        <Menu.Item>
          <Button  basic inverted content="Login" />
          <Button basic inverted content="Register" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
