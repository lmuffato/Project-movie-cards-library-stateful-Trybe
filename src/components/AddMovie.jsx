import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleTextChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { title } = this.state;
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
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
