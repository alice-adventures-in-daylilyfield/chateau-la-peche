import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';


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

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  titleColor: {
    red: 'rgba(168, 0, 47, 0.6)',
    white: 'rgba(222, 176, 55, 0.6)',
    rose: 'rgba(255, 40, 25, 0.6)'
  }
};

export default class Wines extends React.Component {

  render() {
    return (
      <div className="Wines" style={styles.root}>
        <GridList cellHeight={200} style={styles.gridList}>
          {dummies.map((wine) => (
            <GridTile
              title={`${wine.name} ${wine.vintage}`}
              subtitle={wine.nameJpn}
              titleBackground={styles.titleColor[wine.kind]}>
              <img src={wine.etiquettePath} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

