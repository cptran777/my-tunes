// The player window for the currently playing song. Should contain
// the basic information as well as the UI for any player conntrols
// This may need to be broken down into smaller components as
// complexity increases

import React from 'react';

/********************** MAIN OBJECT ************************/

class Player extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};

  }

  render() {

    return (
      <div id="music-player"></div>
    );

  }

}

export default Player;