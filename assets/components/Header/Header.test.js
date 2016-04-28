jest.dontMock('./Header.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Header = require('./Header.jsx').default;

describe('Header', () => {

  it('should render into the document', () => {

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(
      <Header />
    );

    var node = ReactDOM.findDOMNode(component);

    expect(node).toBeDefined();
  });

});
