import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">My Movie Collection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Register</Nav.Link>
                        <Nav.Link href="/register">Login</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search by movie title..." className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        {/* this button shoud redirect to movie details of the movie user searched*/}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
