import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.scss';

interface INavBarProps {
  campaignHash: string;
  handleCampaignHash(event:any): void;
  joinCampaign(): void;
}

function NavBar( props: INavBarProps) {
  return (
    <Navbar bg="dark" expand="lg" className="navbar">
      <Navbar.Brand className="navbar-brand">Tic-Tac-Toe</Navbar.Brand>
      <Nav className="ml-auto mr-2 navbar-link scale-animation">
        <Link to="/">
          New Campaign
        </Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Enter game hash..."
          className="mx-sm-4 input-hash scale-animation"
          value={props.campaignHash}
          onChange={props.handleCampaignHash}
        />
        <Button 
          onClick={ props.joinCampaign }
          disabled={ props.campaignHash.length < 5 }
          className="navbar-join scale-animation"
        >
          Join a game
        </Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;