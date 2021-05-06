import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="input-label" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ (this.handleChange) }
              data-testid="title-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;