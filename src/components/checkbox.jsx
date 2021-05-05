import React from 'react';
import PropTypes from 'prop-types';

class Check extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange, texto, nome } = this.props;
    return (
      <>
        <label
          className="label checkbox"
          data-testid="checkbox-input-label"
          htmlFor={ nome }
        >
          {texto}
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id={ nome }
            name={ nome }
          />
        </label>
        <br />
      </>
    );
  }
}

Check.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default Check;
