import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/main';
import Wines from './components/wines';
import Wine from './components/wine';
import NewWine from './components/new-wine';

injectTapEventPlugin();

const routes =
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Wines} />
      <Route path="wines/new" component={NewWine} />
      <Route path="wines/:wid" component={Wine} />
    </Route>
  </Router>;

render(routes, document.querySelector('main'));


