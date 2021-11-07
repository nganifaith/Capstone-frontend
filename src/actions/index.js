export const SET_BEACH = 'SET_BEACH';
export const SET_BEACH_DETAILS = 'SET_BEACH_DETAILS';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setBeaches = (beaches) => ({
  type: SET_BEACH,
  payload: beaches
    .map((beach) => ({ ...beach }))
    || [],
});

export const setBeachDetails = (beach) => ({
  type: SET_BEACH_DETAILS,
  payload: beach,
});

export const setUserData = (users) => ({
  type: SET_USER_DATA,
  payload: users,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
