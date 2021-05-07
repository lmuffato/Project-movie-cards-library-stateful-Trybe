import React from 'react';
import PropTypes from 'prop-types';
import AddRating from './AddRating';
import AddSelect from './AddSelect';
import AddStoryline from './AddStoryline';
import AddButton from './AddButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitleInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubTitleInput = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleImagePath = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleStoryLine = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  handleSelect = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  handleXablau = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title } = this.state;
    const { subtitle } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;
    const { rating } = this.state;
    const { genre } = this.state;
    // const { onClickButton } = this.props;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="input-titulo" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleTitleInput }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleSubTitleInput }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleImagePath }
            />
          </label>
          <AddStoryline
            storyline={ storyline }
            handleStoryline={ this.handleStoryLine }
          />
          <AddRating rating={ rating } handleRating={ this.handleRating } />
          <AddSelect genre={ genre } handleGenre={ this.handleSelect } />
          <AddButton onClick={ this.handleXablau } />
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
