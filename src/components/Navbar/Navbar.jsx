import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './navbar.css';

const Nav = () => {
    return (
        <Navbar className="nav-main" expand="lg">
            <Container className="nav-container">
                <Navbar.Brand href="#">Local Market</Navbar.Brand>
                <div className="nav-button">
                    <button className="fa fa-bars fa-2x"></button>
                </div>
            </Container>
        </Navbar>
    )
}

export default Nav;
