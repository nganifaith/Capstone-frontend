const baseUrl = 'http://localhost:3000/';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}
export const beachesData = () => sendRequest('beaches');
export const getbeachDetails = (id) => sendRequest(`beaches/${id}`);
