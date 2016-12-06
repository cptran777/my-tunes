// A song is a single card component that will populate the song list.
// Therefore, it can be a simple stateless component that renders
// the title and other information passed to it. 

import React from 'react';

/********************** MAIN OBJECT ************************/

const Song = (props) => {
  return (
    <div className="song-card"></div>
  );
};

export default Song;