import React, { Component } from 'react';

import { apiHandler } from '../utilites/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

class App extends Component {
  state = {
    pictures: [],
    request: '',
    page: 1,
    isLoading: false,
  };

  async getPic() {
    await apiHandler.findPictures('cat', 1);
  }

  findPictures = async request => {
    const requestTrimmed = request.trim();
    if (requestTrimmed) {
      this.setState({
        request: requestTrimmed,
        page: 1,
        isLoading: true,
      });
      const response = await apiHandler.findPictures(requestTrimmed, 1);
      this.setState({
        pictures: response.data.hits,
        isLoading: false,
      });
    }
  };

  morePictures = async () => {
    const newPage = this.state.page + 1;
    const response = await apiHandler.findPictures(this.state.request, newPage);
    const newPictures = [...this.state.pictures, ...response.data.hits];
    this.setState({
      pictures: newPictures,
      page: newPage,
    });
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
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery pictures={this.state.pictures} />
        )}
        {this.state.pictures.length > 0 && (
          <Button onClick={this.morePictures} />
        )}
      </div>
    );
  }
}

export { App };
