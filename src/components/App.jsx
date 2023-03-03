import React, { Component } from 'react';

import {apiHandler} from '../utilites/api';

class App extends Component {
  
  async getPic() {
    await apiHandler.findPictures('cat', 1);
  }


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
        onClick={this.getPic}
      >
        React homework template
      </div>
    );
  }
}

export { App };
