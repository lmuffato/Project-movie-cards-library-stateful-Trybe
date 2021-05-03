import React from 'react';

import PropTypes from 'prop-types';

import { tags } from '../libs/data';

function Label(props) {
  const { labelInfo, inputExtraInfo, inputMainInfo } = props;
  const { testId, control, text } = labelInfo;
  const { tag } = inputExtraInfo;
  const Tag = tags[tag];

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
