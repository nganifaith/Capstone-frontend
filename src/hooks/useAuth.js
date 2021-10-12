import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, setAuthToken } from '../actions/currentUser';
import { getCurrentUser, signIn as signUserIn } from '../Api/auth';

export default function useAuth() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  async function signIn(email, password) {
    setLoading(true);
    const { jwt } = await signUserIn(email, password);
    dispatch(setAuthToken(jwt));
    const user = await getCurrentUser();
    dispatch(login(user));
    setLoading(false);
    return user;
  }

  return {
    loading,
    signIn,
  };
}
