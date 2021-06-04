import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './RegisterPage.css';
import axios from '../axios';

const LoginPage = ({
  history
}) => {

  const onLoginFormSubmitHandler = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    console.log(username, password, repeatPassword);

    await axios.post('/auth/register', {}, {
      auth: {
        username: username,
        password: password,
        repeatPassword: repeatPassword,
      }
    });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign-up</h1>
        <Form onSubmit={onLoginFormSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control name='username' type="username" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Repeat-Password</Form.Label>
            <Form.Control name="repeatPassword" type="password" placeholder="Repeat-Password" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Sign-up
  </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;