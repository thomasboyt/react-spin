import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import ReactSpinner from '../main';

describe('<ReactSpinner />', () => {
  it('can be instantiated', () => {
    const component = TestUtils.renderIntoDocument(
      <ReactSpinner />
    );
    expect(component.refs.container.querySelector('.spinner')).toNotBe(null);
  });
});
