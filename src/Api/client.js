import { getToken } from '../actions/currentUser';

const baseUrl = 'http://localhost:3000/';

function getOptions(method, params) {
  return {
    method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: params && JSON.stringify(params), // body data type must match "Content-Type" header
  };
}

async function sendRequest(url, method = 'GET', params) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint, getOptions(method, params));
  return response.json();
}

export default sendRequest;
