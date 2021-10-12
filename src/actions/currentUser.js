export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

const TOKEN_KEY = 'token';

function saveToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || '';
}

export function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logout() {
  saveToken(null);
  return {
    type: LOGOUT,
  };
}

export function setAuthToken(token) {
  saveToken(token);
  return {
    type: SET_TOKEN,
    payload: token,
  };
}
