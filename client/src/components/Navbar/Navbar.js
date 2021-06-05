import React, { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { useSelector } from "react-redux";
import axios from 'axios';
import { USER_SERVER } from '../Config';

const Header = (props) => {
    let history = useHistory();
    const user = useSelector(state => state.user)
    console.log(user);

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                props.history.push("/login");
            } else {
                alert('Log Out Failed');
            }
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/search');
    }

    if (user.userData && !user.userData.isAuth) {
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
    } else {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">My Movie Collection</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={logoutHandler} >Logout</Nav.Link>
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
}

export default withRouter(Header);
