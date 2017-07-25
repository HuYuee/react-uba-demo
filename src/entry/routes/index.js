import React from 'react';
import { Router ,Route, hashHistory, IndexRoute} from 'react-router';
import App from '../layout/App';
// import Index from 'pages/Test/App';
// import Index from 'pages/Test1/App';
import Index from 'pages/Test2/App';

const Routers = (
  <Router history={hashHistory}>
    <Route exact path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
)


export default Routers
