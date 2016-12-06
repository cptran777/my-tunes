// This container houses the top banner. The banner should remain 
// pretty static as a logo holder and navigation pane
// This will probably be modified if Redux were to eventually
// be implemented

import React from 'react';

/********************** MAIN OBJECT ************************/

class Banner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div id="banner"></div>
    );
  }

}

export default Banner;