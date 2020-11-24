import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from './footer';

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
