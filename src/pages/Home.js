import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBeaches } from '../actions';
import { beachesData } from '../Api';
import Main from '../components/Main';
import Beach from '../components/Beach';
import { getBeaches, getSearchTerm } from '../reducers/beachesList';

const Home = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const beaches = useSelector(getBeaches);
  const searchTerm = useSelector(getSearchTerm);

  useEffect(() => {
    setError('');
    beachesData().then((beaches) => {
      dispatch(setBeaches(beaches));
    });
  }, [searchTerm]);

  return (
    <div>
      <span>{error}</span>
      <Main header={!searchTerm ? 'All listings' : `Results for "${searchTerm}"`}>
        {beaches.map((beach) => (
          <Beach key={beach.id} beach={beach} />
        ))}
      </Main>
    </div>
  );
};

export default Home;
