import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img
          src={this.props.smallpic}
          alt={'picture #' + this.props.id}
          className={css.galleryImg}
        />
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
