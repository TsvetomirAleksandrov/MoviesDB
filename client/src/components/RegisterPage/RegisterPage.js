import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './RegisterPage.css';
import { registerUser } from "../../actions/user_actions";
import { useDispatch } from "react-redux";

const RegisterPage = (props) => {
  const dispatch = useDispatch();

  const onRegisterFormSubmitHandler = async (e) => {

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    let dataToSubmit = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    dispatch(registerUser(dataToSubmit)).then(response => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert(response.payload.err.errmsg)
      }
    })
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign-up</h1>
        <Form onSubmit={onRegisterFormSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Repeat-Password</Form.Label>
            <Form.Control name="confirmPassword" type="password" placeholder="Repeat-Password" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Sign-up
  </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;