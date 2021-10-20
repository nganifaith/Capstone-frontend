import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setAuthToken } from '../actions/currentUser';
import { getCurrentUser, signIn as signUserIn, signUp } from '../Api/auth';

export default function useAuth() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  const isAdmin = currentUser?.email === 'admin@admin.com';

  async function loadCurrentUser() {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      dispatch(login(user));
    } catch (e) {
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email, password) {
    setLoading(true);
    const { jwt } = await signUserIn(email, password);
    dispatch(setAuthToken(jwt));
    setLoading(false);
    await loadCurrentUser();
  }

  function register(email, username, password, confirmPassword) {
    return signUp(username, email, password, confirmPassword)
      .then(() => signIn(email, password));
  }

  return {
    loading,
    signIn,
    currentUser,
    isAdmin,
    userId: currentUser?.id,
    loadCurrentUser,
    register,
  };
}
