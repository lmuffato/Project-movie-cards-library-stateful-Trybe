import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        className="label"
        data-testid="genre-input-label"
        htmlFor="genders"
      >
        Gênero
        <div className="select">
          <select
            value={ value }
            id="genders"
            data-testid="genre-input"
            onChange={ onChange }
            name="genre"
          >
            <option
              value="action"
              data-testid="genre-option"
            >
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
