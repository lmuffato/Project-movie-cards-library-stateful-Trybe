import React from 'react';
import PropTypes from 'prop-types';

/* https://reactjs.org/docs/jsx-in-depth.html
  The wizardly below for Tag works because
  if we write tag it gets interpreted as a html element named tag
  writing Tag we make JSX parse the value inside the variable
*/
class Field extends React.Component {
  render() {
    const { id, value, labelText, onChange, Tag, options, type } = this.props;
    return React.createElement(
      'label',
      {
        htmlFor: id,
        'data-testid': `${id}-input-label`,
      },
      [
        React.createElement(
          Tag,
          {
            id,
            name: id === 'image' ? `${id}Path` : id, // Sorry
            type,
            value,
            onChange,
            'data-testid': `${id}-input`,
          },
            options?.map((option) => (
              React.createElement(
                'option',
                {
                  key: option.value,
                  value: option.value,
                  'data-testid': option.id,
                },
                option.text,
              )
            )),
        ),
        labelText,
      ],
    );
  }
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
  ).isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Tag: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
};

Field.defaultProps = {
  Tag: 'input',
  type: 'text',
  options: null,
};

export default Field;
