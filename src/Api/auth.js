import { getToken } from '../actions/currentUser';
import sendRequest from './client';

export function signIn(email, password) {
  return sendRequest('/signin', 'POST', { auth: { email, password } });
}

export function getCurrentUser() {
  if (!getToken()) return Promise.reject();
  return sendRequest('/me');
}

export function signUp(name, email, password, confirmation) {
  return sendRequest('/signup', 'POST', {
    name, email, password, password_confirmation: confirmation,
  });
}
