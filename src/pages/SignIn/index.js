import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

import {
  Button, Content, Form, Wrapper,
} from './SignIn.styles';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loading, signIn } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn(email, password);
      history.push('/dashboard');
    } catch (e) {
      setError('Invalid email or password');
    }
  }

  return (
    <Wrapper>
      <Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
          {error}
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
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button disabled={loading}>Submit</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};
export default SignInPage;
