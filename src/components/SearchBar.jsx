import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export default class SearchBar extends React.Component {
  render() {
    console.log(this.props);
    const { onSearchTextChange } = this.props;

    return (
      <Form onSearchTextChange={ onSearchTextChange } />
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};
