import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import {
  Button, Content, Form, Wrapper,
} from './SignUp.styles';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Password and confirm password must match');
    }

    return register(email, name, password, confirmPassword)
      .then(() => history.push('/'))
      .catch((e) => {
        setError('There was an error registering you. Please check your input and try again later.', e);
      });
  };

  return (
    <Wrapper>
      <Content>
        <Form onSubmit={onSubmit}>
          <span>{error}</span>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirm">
            Confirm Password
            <input
              id="confirm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <Button>Submit</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};
export default SignUpPage;
