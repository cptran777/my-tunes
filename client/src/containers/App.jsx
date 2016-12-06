// App is the top-most level of the application. 
// Visual structure of the application is:
// ----------------------------------------------------------
//                    BANNER
// ----------------------------------------------------------
// 
//             APP BODY OR LOGIN SCREEN
// 
// 
// ----------------------------------------------------------
//                    FOOTER
// ----------------------------------------------------------

/****** IMPORT DEPENDENCIES AND HIGH-LEVEL CONTAINERS ******/

import React from 'react';

import Banner from './Banner';
import AppBody from './AppBody';
import LoginBody from './LoginBody';
import Footer from './Footer';

/********************** MAIN OBJECT ************************/
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // Temporary storage of the loggedin state
      // Should implement some kind of session since putting
      // it directly here is pretty insecure 
      loggedIn: false
    }
  }

  render() {
    return (
      <div id="app-container">
        <Banner />
        {this.state.loggedIn ? AppBody : LoginBody}
        <Footer />
      </div>
    );
  }
}

export default App;