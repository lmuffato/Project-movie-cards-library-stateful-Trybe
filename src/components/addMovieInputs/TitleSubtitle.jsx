import React from 'react';
import PropTypes from 'prop-types';

class TitleSubtitle extends React.Component {
  render() {
    const { title, handleChange, subtitle, handleSub } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          <input
            onChange={ handleChange }
            id="titleInput"
            type="text"
            value={ title }
            data-testid="title-input"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subInput">
          Subtítulo
          <input
            onChange={ handleSub }
            id="subInput"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

TitleSubtitle.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  subtitle: PropTypes.string,
  handleSub: PropTypes.func,
}.isRequired;

export default TitleSubtitle;
