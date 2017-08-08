import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title} subtitle="Mek's first application"/>
        <div className="warpper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
