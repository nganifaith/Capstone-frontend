import sendRequest from './client';

export const beachesData = () => sendRequest('beaches');
export const getbeachDetails = (id) => sendRequest(`beaches/${id}`);

export async function randomUsersData() {
  const endPoint = 'https://random-data-api.com/api/users/random_user?size=9';
  const response = await fetch(endPoint);
  return response.json();
}
