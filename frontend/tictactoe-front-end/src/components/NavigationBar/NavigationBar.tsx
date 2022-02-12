import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavigationBar.scss';

interface INavigationBarProps {
    campaignHash: string;
    handleCampaignHash(event: any): void;
    openModal(): void;
}

const NavigationBar = (props: INavigationBarProps) => {
    return (
        <Navbar bg="dark" expand="lg" className="navbar">
            <Navbar.Brand className="navbar-brand"><Link to="/">Tic-Tac-Toe</Link></Navbar.Brand>
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
                    onClick={props.openModal}
                    disabled={props.campaignHash.length < 5}
                    className="navbar-join scale-animation"
                >
                    Join a game
                </Button>
                <Link to={{
                    pathname: `/campaign/${props.campaignHash}`,
                    state: {
                        player1Selected: false,
                        watcher: true
                    }
                }} >
                    <Button
                        disabled={props.campaignHash.length < 5}
                        className="navbar-join scale-animation mx-3"
                    >
                        Watch game
                    </Button>
                </Link>
            </Form>
        </Navbar>
    );
}

export default NavigationBar;