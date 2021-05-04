import React from 'react';
import InputAddMovie from './InputAddMovie';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleTextChange(e) {
    console.log('Mudanca ocorrida');
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label
              htmlFor="title-input"
              data-testid="title-input-label"
            >
              Título
              <input
                type="text"
                value={ title }
                onChange={ this.handleTextChange }
                data-testid="title-input"
                id="title-input"
                name="title"
              />
            </label>
          </div>

          <InputAddMovie
            label="Subtítulo"
            testIdLabel="subtitle-input-label"
            testIdInput="subtitle-input"
            id="subtitle-input"
            inputValue={ subtitle }
            handle={ this.handleTextChange }
            inputName="subtitle"
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
