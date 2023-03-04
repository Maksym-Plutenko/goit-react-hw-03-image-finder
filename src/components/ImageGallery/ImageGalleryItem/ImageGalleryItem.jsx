import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.smallpic} alt={'picture #' + this.props.id} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallpic: PropTypes.string.isRequired,
  largepic: PropTypes.string.isRequired,
};

export { ImageGalleryItem };
