import { getToken } from '../actions/currentUser';
import sendRequest from './client';

export function signIn(email, password) {
  return sendRequest('/user_token', 'POST', { auth: { email, password } });
}

export function getCurrentUser() {
  if (!getToken()) return Promise.reject();
  return sendRequest('/user');
}

export function signUp(name, email, password, confirmation) {
  return sendRequest('/user', 'POST', {
    name, email, password, password_confirmation: confirmation,
  });
}
