import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { rating } = this.props;
    const { handleRating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleRating }
        />
      </label>
    );
  }
}
AddRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleRating: PropTypes.func.isRequired,
};
export default AddRating;
