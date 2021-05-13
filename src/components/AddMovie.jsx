import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

handleOnChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
}

render() {
  const { onClick } = this.props;
  return (
    <div>
      <form data-testid="add-movie-form">
        <label htmlFor="Título" data-testid="title-input-label">
          <input
            type="text"
            name="title"
            id="Título"
            value={ this.title }
            data-testid="title-input"
            onChange={ this.handleOnChange }
          />
        </label>
      </form>
    </div>
  );
}
}

export default AddMovie;
