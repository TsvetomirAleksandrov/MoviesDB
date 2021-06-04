import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Header = (props) => {
    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/search');
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">My Movie Collection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} type="text" placeholder="Search by movie title..." className="mr-sm-2" />
                        <Button onClick={handleSubmit} type='submit' variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
