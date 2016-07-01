import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';

const $NAME = require('./$NAME.jsx').default;

describe('<$NAME />', () => {

  var comp;

  it('calls componentDidMount', () => {
    spy($NAME.prototype, 'componentDidMount');
    comp = mount(<$NAME />);
    expect($NAME.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
