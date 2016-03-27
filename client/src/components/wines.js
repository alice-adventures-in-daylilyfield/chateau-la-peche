import m from 'mithril'


const dummies = Array.apply(null, {length: 10}).map((_, i) => {
  return {
    name: 'chateau hau brion',
    nameJpn: 'シャトー・オー・ブリオン',
    kind: ['red', 'white', 'rose'][Math.floor(Math.random() * 3)],
    vintage: 1900 + i,
    //etiquettePath: 'http://www.bluepolesvineyard.com.au/etiquette_1980.jpg',
    etiquettePath: 'http://ling.charly.free.fr/images/jalle_rouge.jpeg',
    enjoyedAt: '2016-3-25',
    updatedAt: '',
    createdAt: ''
  };
});

const controller = () => {
  return {
    wines: m.prop(dummies)
  };
};

const view = (ctrl) =>
  m('.Wines.mdl-grid', ctrl.wines().map((wine) =>
    m('.Wines__wineCard.mdl-card.mdl-cell.mdl-cell--6-col.mdl-shadow--2dp', [
      m('.Wines__wineCard__etiquette.mdl-card__media', [
        m('img', {src: wine.etiquettePath})
      ]),
      m('.Wines__wineCard__names', {
        class: `Wines__wineCard__names--${wine.kind}`
      }, [
        m('.Wines__wineCard__name', [wine.name, wine.vintage].join(' ')),
        m('.Wines__wineCard__nameJpn', wine.nameJpn)
      ])
    ])
  ));

module.exports = {controller, view}

