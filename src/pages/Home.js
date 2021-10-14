import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { setBeaches } from '../actions';
import { beachesData, removeFavourite, setFavourite } from '../Api';
import Main from '../components/Main';
import Beach from '../components/Beach';
import { getBeaches, getSearchTerm } from '../reducers/beachesList';

function useQuery() {
  const { search } = useLocation();
  return Object.fromEntries(new URLSearchParams(search));
}

const Home = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { favourites } = useQuery();

  const beaches = useSelector(getBeaches);
  const searchTerm = useSelector(getSearchTerm);

  const toggleFav = (e, { id, isFav }) => {
    e.preventDefault();
    e.stopPropagation();
    const action = !isFav ? setFavourite : removeFavourite;
    const fav = isFav ? [] : [1];
    return action(id).then(() => {
      const newBeaches = beaches.map((beach) => (
        {
          ...beach,
          favorite: id === beach.id ? fav : beach.favorite,
        }
      ));
      dispatch(setBeaches(newBeaches));
    });
  };

  useEffect(() => {
    setError('');
    beachesData({ searchTerm, favourites: !!favourites }).then((beaches) => {
      dispatch(setBeaches(beaches));
    });
  }, [searchTerm, favourites]);

  return (
    <div>
      <span>{error}</span>
      <Main header={!searchTerm ? 'All listings' : `Results for "${searchTerm}"`}>
        {beaches.map((beach) => (
          <Beach key={beach.id} beach={beach} toggleFav={(e) => toggleFav(e, beach)} />
        ))}
      </Main>
    </div>
  );
};

export default Home;
