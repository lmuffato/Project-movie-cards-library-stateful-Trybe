import React from 'react';

import PropTypes from 'prop-types';

import { tags, moviesAddMovie } from '../libs/data';

import Option from './Option';

function Label(props) {
  const { labelInfo, inputExtraInfo, inputMainInfo } = props;
  const { testId, control, text } = labelInfo;
  const { tag } = inputExtraInfo;
  const Tag = tags[tag];

  if (tag === 'select') {
    return (
      <label data-testid={ testId } htmlFor={ control }>
        {text}

        <Tag { ...inputMainInfo } { ...inputExtraInfo }>
          {moviesAddMovie.map((kindOfMovie) => (
            <Option key={ kindOfMovie.id } movie={ kindOfMovie } dataId='genre-option'/>
          ))}
        </Tag>

      </label>
    );
  }

  return (
    <label data-testid={ testId } htmlFor={ control }>
      {text}
      <Tag { ...inputMainInfo } { ...inputExtraInfo } />
    </label>
  );
}

Label.propTypes = {
  labelInfo: PropTypes.shape({
    testId: PropTypes.string.isRequired,
    control: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,

  inputExtraInfo: PropTypes.shape({
    'data-testid': PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,

  inputMainInfo: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Label;
