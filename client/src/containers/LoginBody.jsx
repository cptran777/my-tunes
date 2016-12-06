// This container should house everything the user should see
// if they go to the login page. It will also be the container
// that primarily interacts with the backend authentication
// and stormpath stuff, so most of the functions will be
// housed here.

import React from 'react';

/********************** MAIN OBJECT ************************/

class LoginBody extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div id="login-body"></div>
    );
  }

}

export default LoginBody;