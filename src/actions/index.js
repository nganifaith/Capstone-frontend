export const SET_BEACH = 'SET_BEACH';

export const setBeaches = (beaches) => ({
  type: SET_BEACH,
  payload: beaches || [],
});
