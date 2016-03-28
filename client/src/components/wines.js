import m from 'mithril';
import {materialize} from './mdls';


const FAB_CLASS = [
  'mdl-button',
  'mdl-js-button',
  'mdl-button--fab',
  'mdl-js-ripple-effect',
  'mdl-button--colored',
  'mdl-shadow--8dp'
].join('.');

const dummies = Array.apply(null, {length: 10}).map((_, i) => ({
  name: 'chateau hau brion',
  nameJpn: 'シャトー・オー・ブリオン',
  kind: ['red', 'white', 'rose'][Math.floor(Math.random() * 3)],
  vintage: 1900 + i,
  etiquettePath: 'http://www.bluepolesvineyard.com.au/etiquette_1980.jpg',
  //etiquettePath: 'http://ling.charly.free.fr/images/jalle_rouge.jpeg',
  enjoyedAt: '2016-3-25',
  updatedAt: '',
  createdAt: ''
}));

const onNewWineClicked = () => m.route('/wines/new/etiquette');

const controller = () => ({
  wines: m.prop(dummies),
  onNewWineClicked: onNewWineClicked
});

const view = (ctrl) =>
  m('.Wines', [
    m('.mdl-grid', ctrl.wines().map((wine) =>
      m('.Wines__wineCard.mdl-card.mdl-cell.mdl-cell--2-col.mdl-shadow--2dp', [
        m('.Wines__wineCard__etiquette.mdl-card__media', [
          m('img', {src: wine.etiquettePath})
        ]),
        m('.Wines__wineCard__names', {
          class: `Wines__wineCard__names--${wine.kind}`
        }, [
          m('.Wines__wineCard__name.mdl-typography--title', [wine.name, wine.vintage].join(' '))
          //m('.Wines__wineCard__nameJpn.mdl-typography--subhead', wine.nameJpn)
        ])
      ])
    )),
    m(`.Wines__newWine.${FAB_CLASS}`, {
      onclick: ctrl.onNewWineClicked,
      config: materialize
    }, [
      m('i.material-icons', 'add') 
    ])
  ]);

module.exports = {controller, view};

