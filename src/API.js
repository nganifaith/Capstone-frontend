const baseUrl = 'localhost://3000';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}
const beaches = () => sendRequest('beaches');

export default beaches;
