import React from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { hot } from 'react-hot-loader';

// components
import Header from 'components/Header/Header';

const App = () => (
  <div class="app">
    <Header />
    <div class="container">
      <h3>Backend Features</h3>

      <ul>
        <li><a href="https://sailsjs.org">Sails v1.0.2</a></li>
        <li><a href="https://github.com/sgress454/sails-hook-autoreload">Sails Autoreload Hook</a></li>
      </ul>

      <h3>Frontend Features</h3>
      <ul>
        <li><a href="https://facebook.github.io/react/">React v16.3.2</a></li>
        <li><a href="https://github.com/reactjs/react-router">React Router</a></li>
        <li><a href="https://babeljs.io/">Babel</a></li>
        <li><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a></li>
        <li><a href="https://webpack.github.io/docs/webpack-dev-server.html">Webpack Dev Server</a></li>
        <li><a href="https://github.com/jtangelder/sass-loader">SCSS</a></li>
        <li><a href="https://github.com/passy/autoprefixer-loader">Autoprefixer</a></li>
      </ul>
    </div>
  </div>
);

export default hot(module)(App)