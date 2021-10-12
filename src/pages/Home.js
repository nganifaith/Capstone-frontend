import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBeaches } from '../actions';
import { beachesData } from '../Api';
import Main from '../components/Main';
import Beach from '../components/Beach';
import SearchBar from '../components/SearchBar';
import { getBeaches } from '../reducers/beachesList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const beaches = useSelector(getBeaches);
  useEffect(() => {
    setError('');
    beachesData().then((beaches) => {
      dispatch(setBeaches(beaches));
    });
  }, [searchTerm]);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <span>{error}</span>
      <Main header={searchTerm ? 'Search Results' : 'All Sites'}>
        {beaches.map((beach) => (
          <Beach key={beach.id} beach={beach} />
        ))}
      </Main>
    </div>
  );
};

export default Home;
