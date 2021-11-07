import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { setBeaches } from '../actions';
import { beachesData, removeFavourite, setFavourite } from '../Api';
import Main from '../components/Main';
import Beach from '../components/Beach';
import { getBeaches, getSearchTerm } from '../reducers/beachesList';
import useAuth from '../hooks/useAuth';

function useQuery() {
  const { search } = useLocation();
  return Object.fromEntries(new URLSearchParams(search));
}

const Home = () => {
  const dispatch = useDispatch();
  const { favourites } = useQuery();
  const { userId } = useAuth();
  const history = useHistory();

  const beaches = useSelector(getBeaches);
  const searchTerm = useSelector(getSearchTerm);

  const toggleFav = (e, { id, fav }) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userId) {
      return history.push('/login');
    }

    const action = !fav ? setFavourite : removeFavourite;
    return action(id).then(() => {
      const newBeaches = beaches.map((beach) => (
        {
          ...beach,
          fav: id === beach.id ? !fav : beach.fav,
        }
      ));
      dispatch(setBeaches(newBeaches));
    });
  };

  useEffect(() => {
    beachesData({ searchTerm, favourites: !!favourites }).then((beaches) => {
      dispatch(setBeaches(beaches));
    });
  }, [searchTerm, favourites]);

  return (
    <div>
      <Main header={!searchTerm ? 'All listings' : `Results for "${searchTerm}"`}>
        {beaches.map((beach) => (
          <Beach key={beach.id} beach={beach} toggleFav={(e) => toggleFav(e, beach)} />
        ))}
      </Main>
    </div>
  );
};

export default Home;
