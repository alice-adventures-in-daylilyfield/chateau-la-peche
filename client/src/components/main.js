import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../theme';

const styles = {
  appBar: {
    position: 'fixed' 
  },
  content: {
    paddingTop: '64px'
  }
};

export default class Main extends React.Component {
  
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  }

  render() {
    return (
      <div className="Main">
        <AppBar title="Chateau La Peche" style={styles.appBar} />
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ])
};

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
};

