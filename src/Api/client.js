import { getToken } from '../actions/currentUser';

export const baseUrl = process.env.REACT_APP_BASE_URL;

function getOptions(method, params, isFormData) {
  const headers = {
    Authorization: `Bearer ${getToken()}`,
  };

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  return {
    method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: params, // body data type must match "Content-Type" header
  };
}

export async function send(url, method, params, isFormData) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint, getOptions(method, params, isFormData));
  return response.json();
}

async function sendRequest(url, method = 'GET', params) {
  return send(url, method, params && JSON.stringify(params));
}

export default sendRequest;
