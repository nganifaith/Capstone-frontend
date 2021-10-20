import sendRequest, { send } from './client';

const toParams = (params) => new URLSearchParams(params);

export const beachesData = (params) => sendRequest(`beaches?${toParams(params)}`);
export const getbeachDetails = (id) => sendRequest(`beaches/${id}`);

export async function randomUsersData() {
  const endPoint = 'https://random-data-api.com/api/users/random_user?size=9';
  const response = await fetch(endPoint);
  return response.json();
}

export function setFavourite(id) {
  return sendRequest('favorites/set', 'PUT', { beach_id: id });
}

export function removeFavourite(id) {
  return sendRequest('favorites/delete', 'DELETE', { beach_id: id });
}

export function createBeach(beach, image) {
  let data = new FormData();
  data = Object.keys(beach)
    .reduce((form, key) => {
      form.append(`beach[${key}]`, beach[key]);
      return form;
    }, data);

  data.append('beach[featured_image]', image);
  return send('beaches', 'POST', data, true);
}
