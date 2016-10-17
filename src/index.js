import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as views from './views/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={views.Homepage} />
    <Route path="/:blogId" component={views.App}>
      <IndexRoute component={views.Timeline} />
      <Route path="/:blogId/map" component={views.Map} />
      <Route path="/:blogId/about" component={views.About} />
      <Route path="/:blogId/newpost" component={views.NewPost} />
    </Route>
  </Router>
), document.getElementById('root'));
