import React, { useState } from 'react';
import {
  Button, Content, Form, Wrapper,
} from './SignIn.styles';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Content>
        <Form>
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
          <Button>Submit</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};
export default SignInPage;
