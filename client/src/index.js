import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/main';
import Wines from './components/wines';

injectTapEventPlugin();

const routes =
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Wines} />
    </Route>
  </Router>

render(routes, document.querySelector('main'));


