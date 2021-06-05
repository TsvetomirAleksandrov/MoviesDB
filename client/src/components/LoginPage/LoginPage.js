import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css';
import { loginUser } from "../../actions/user_actions";
import { useDispatch } from "react-redux";

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    let dataToSubmit = {
      email: email,
      password: password,
    };

    dispatch(loginUser(dataToSubmit))
      .then(response => {
        if (response.payload.loginSuccess) {
          window.localStorage.setItem('userId', response.payload.userId);

          props.history.push('/');
        } else {
          alert('Check out your Account or Password again');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <Form onSubmit={onLoginFormSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign-in
  </Button>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);