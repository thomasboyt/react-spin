import expect from 'expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

import ReactSpinner from '../main';

describe('<ReactSpinner />', () => {
  it('can be instantiated', () => {
    expect(() => TestUtils.renderIntoDocument(
      <ReactSpinner />
    )).toNotThrow()
  });
});
