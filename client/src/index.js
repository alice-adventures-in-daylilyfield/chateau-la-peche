import m from 'mithril';

import Wines from './components/wines';
import NewWineEtiquette from './components/new-wine-etiquette';

m.route.mode = 'hash';

m.route(document.querySelector('main'), '/', {
  '/': Wines,
  '/wines/new/etiquette': NewWineEtiquette
});



