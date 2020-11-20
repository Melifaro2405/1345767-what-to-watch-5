import React from 'react';
import renderer from 'react-test-renderer';
import {ActorsList} from './actors-list';

it(`Should ActorsList render correctly`, () => {
  const tree = renderer
    .create(<ActorsList
      actors={[`test1, test2, test3`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
