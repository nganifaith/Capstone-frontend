import sendRequest from './client';

export function signIn(email, password) {
  return sendRequest('auth/signin', 'POST', { auth: { email, password } });
}

export function signUp() {
  return null;
}

export function getCurrentUser() {
  return sendRequest('auth/me');
}
