// This container houses the main body of the application. 
// Most of the activity and user interaction will be handled
// at the top level by this container. 

/*********** IMPORT DEPENDENCIES AND COMPONENTS ************/

import React from 'react';

import Player from '../components/Player';
import PlayList from '../components/PlayList';
import SongList from '../components/SongList';

/********************** MAIN OBJECT ************************/

class AppBody extends React.Component {

  constructur(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div id="app-body"></div>
    );
  }

}

export default AppBody;