import React, { Component } from 'react';

import { apiHandler } from '../utilites/api';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    isLoading: false,
  };

  async getPic() {
    await apiHandler.findPictures('cat', 1);
  }

  findPictures = async request => {
    const requestTrimmed = request.trim();
    // console.log(requestTrimmed);
    if (requestTrimmed) {
      this.setState({
        page: 1,
        isLoading: true,
      });
      const response = await apiHandler.findPictures(requestTrimmed, 1);
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.hits);
      this.setState({
        pictures: response.data.hits,
        isLoading: false,
      });
    }
  };

  render() {
    return (
      <div
        style={{
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
        {this.state.isLoading ? (<Loader />) : <ImageGallery pictures={this.state.pictures} />}
        
      </div>
    );
  }
}

export { App };
