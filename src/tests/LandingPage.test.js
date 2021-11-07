import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';

import LandingPage from '../pages/LandingPage';

const history = createMemoryHistory();
const store = createStore(rootReducer);

test('full app rendering/navigating', () => {
  const welcome = renderer.create(
    <Provider store={store}>
      <Router history={history}>
        <LandingPage />
      </Router>
      ,
    </Provider>,
  ).toJSON();
  expect(welcome).toMatchSnapshot();
});
