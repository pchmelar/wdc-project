import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from './views/Homepage';
import App from './views/App';
import Timeline from './views/Timeline';
import Map from './views/Map';
import About from './views/About';
import NewPost from './views/NewPost';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/:blogId" component={App}>
      <IndexRoute component={Timeline} />
      <Route path="/:blogId/map" component={Map} />
      <Route path="/:blogId/about" component={About} />
      <Route path="/:blogId/newpost" component={NewPost} />
    </Route>
  </Router>
), document.getElementById('root'));
