const baseUrl = 'http://localhost:3000/';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}
const beachesData = () => sendRequest('beaches');

export default beachesData;
