import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import {Link, browserHistory} from 'react-router';


const dummies = Array.apply(null, {length: 10}).map((_, i) => ({
  id: i,
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
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
    marginBottom: 24
  },
  titleColor: {
    red: 'rgba(168, 0, 47, 0.6)',
    white: 'rgba(222, 176, 55, 0.6)',
    rose: 'rgba(255, 40, 25, 0.6)'
  },
  fab: {
    position: 'fixed',
    right: '20px',
    bottom: '20px'
  }
};

export default class Wines extends React.Component {

  onFabClicked() {
    browserHistory.push('wines/new');
  }

  render() {
    return (
      <div className="Wines" style={styles.root}>
        <GridList cellHeight={200} style={styles.gridList}>
          {dummies.map((wine) => (
            <Link to={`wines/${wine.id}`}
                  key={wine.id}>
              <GridTile
                title={`${wine.name} ${wine.vintage}`}
                subtitle={wine.nameJpn}
                titleBackground={styles.titleColor[wine.kind]}>
                <img src={wine.etiquettePath} />
              </GridTile>
            </Link>
          ))}
        </GridList>
        <FloatingActionButton style={styles.fab}
                              onClick={this.onFabClicked}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

