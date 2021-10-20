import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';

import Home from '../pages/Home';

const history = createMemoryHistory();
const store = createStore(rootReducer);

test('full app rendering/navigating', () => {
  const home = renderer.create(
    <Provider store={store}>
      <Router history={history}>
        <Home />
      </Router>
      ,
    </Provider>,
  ).toJSON();
  expect(home).toMatchSnapshot();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Home />
      </Router>
    </Provider>,
  );
  const listings = screen.getByRole('heading');
  expect(listings).toBeInTheDocument();
});
