import React from 'react';

import PropTypes from 'prop-types';

function Label(props) {
  const { labelInfo, inputExtraInfo, inputMainInfo } = props;
  const { testId, control, text } = labelInfo;

  return (
    <label data-testid={ testId } htmlFor={ control }>
      {text}
      <input { ...inputMainInfo } { ...inputExtraInfo } />
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
    type: PropTypes.string.isRequired,
  }).isRequired,
  inputMainInfo: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Label;
