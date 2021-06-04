// import { auth } from '../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = ({
  history
}) => {
  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log(username, password);

    // auth.signInWithEmailAndPassword(username, password)
    //   .then((userCredential) => {
    //     history.push('/');
    //   });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign-in
  </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;