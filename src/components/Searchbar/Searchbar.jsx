import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    request: '',
  };

  changeHandler = evt => {
    this.setState({
      request: evt.currentTarget.value,
    });
  };

  submitHandler = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.request);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.submitHandler}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.changeHandler}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export { Searchbar };
