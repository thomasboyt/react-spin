import expect from 'expect';
import React from 'react';

import ReactSpinner from '../main';

describe('<ReactSpinner />', () => {
  it('can be instantiated', () => {
    const component = React.renderComponent(<ReactSpinner />, document.createElement('div'));
    expect(component).toBeOk();
  });
});
