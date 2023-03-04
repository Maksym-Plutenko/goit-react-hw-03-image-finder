import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  clickHandler = evt => {
    this.props.onClick();
  };

  render() {
    return (
      <button type="button" onClick={this.clickHandler}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export { Button };
