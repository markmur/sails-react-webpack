import 'styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from 'components/App/App';
import NotFound from 'components/NotFound/NotFound';

const root = document.createElement('div')
document.body.appendChild(root)

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>, root) 
