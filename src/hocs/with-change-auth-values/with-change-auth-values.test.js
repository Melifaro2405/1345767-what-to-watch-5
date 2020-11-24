import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withChangeAuthValues from "./with-change-auth-values";

const MockComponent = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withChangeAuthValues(MockComponent);

it(`withChangeAuthValues is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
