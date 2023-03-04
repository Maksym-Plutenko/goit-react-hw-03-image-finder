import React, { Component } from 'react';

import '../styles/styles.css';

import {apiHandler} from '../utilites/api';
import {Searchbar} from './Searchbar/Searchbar';

class App extends Component {
  
  async getPic() {
    await apiHandler.findPictures('cat', 1);
  }

  findPictures = async request => {
    console.log(request);

  }


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
        // onClick={this.getPic}
      >
        <Searchbar onSubmit={this.findPictures} />
      </div>
    );
  }
}

export { App };
