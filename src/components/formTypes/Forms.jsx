import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

class Forms extends React.Component {
  constructor(props) {
    super();
    this.state = this.stateFrom(props.fields);
  }

  stateFrom = (fields) => Object.keys(fields).reduce((obj, key) => {
    const curObj = fields[key];
    const { defaultValue = this.defaultFrom(curObj.element, curObj.type) } = curObj;
    return ({
      ...obj,
      [key]: (defaultValue),
    });
  }, {});

  defaultFrom = (element, maybeType) => {
    switch (element) {
    case 'textarea':
      return ('');
    case 'input':
      return this.defaultInputOf(maybeType);
    case 'select':
      throw Error('Needs to supply default for select elements');
    default:
      throw new TypeError(`Forms ${element} not implemented`);
    }
  }

  defaultInputOf = (type) => {
    switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    default:
      throw new TypeError(`input ${type} is not implemented`);
    }
  }

  fieldChanged = (event) => {
    const { target: { id, value } } = event;
    this.setState(() => ({
      [id]: value,
    }));
  }

  formSubmit = () => {
    const { formSubmit, fields } = this.props;
    formSubmit(this.state);
    this.setState(this.stateFrom(fields));
  }

  render() {
    const { fields } = this.state;
    const { formid, btnid } = this.props;
    const data = { ...this.props };
    return (
      <form data-testid={ formid }>
        { Object.keys(fields).map((key) => {
          const fieldData = data[key];
          return <Field key={ key } onChange={ this.fieldChanged } { ...fieldData } />;
        })}
        <button type="button" onClick={ this.formSubmit } data-testid={ btnid }> </button>
      </form>
    );
  }
}

Forms.propTypes = {
  fields: PropTypes.shape({}),
  formid: PropTypes.string.isRequired,
  btnid: PropTypes.string.isRequired,
  formSubmit: PropTypes.func.isRequired,
};

Forms.defaultProps = {
  fields: {},
};

export default Forms;

/*
  How to call this component - eg:
  const props = {
  formid: 'add-movie-form',
  btnid: 'send-button',
  fields: {
  'id': { 'element', 'type?/children?/default?', 'labelText' },
  'title-input': { 'input', 'text', 'Título' },
  'genre-input': { 'select', '[option]', 'action', 'Gênero' },
  }
}
< Forms { ...fields } /> */

// I don't need a default for select, just pick the first option ¬¬
