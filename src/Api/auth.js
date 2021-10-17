import sendRequest from './client';

export function signIn(email, password) {
  return sendRequest('auth/signin', 'POST', { auth: { email, password } });
}

export function getCurrentUser() {
  return sendRequest('auth/me');
}

export function signUp(name, email, password, confirmation) {
  sendRequest('auth/signup', 'POST', {
    name, email, password, password_confirmation: confirmation,
  });
}
