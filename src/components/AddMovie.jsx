import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {  
  constructor(props) {
    super(props);

    this.clearState = this.clearState.bind(this)

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  clearState() {
    const {onClick} = this.props
    onClick()
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })

  }
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state
    return (
      <form data-testid="add-movie-form">
        <label htmlFor = 'title' data-testid="title-input-label">
          Título
        <input value = {title} onChange = { (e) => this.setState({title: e.target.value})} id = 'title' data-testid="title-input"
          type = 'text' />
        </label>
        <br/>

        <label htmlFor = 'subtitle' data-testid="subtitle-input-label">
        Subtítulo
        <input value = {subtitle} onChange = { (e) => this.setState({subtitle: e.target.value})} id = 'subtitle' data-testid="subtitle-input"
          type = 'text' />
        </label>
        <br/>

        <label htmlFor = 'img' data-testid="image-input-label">
        Imagem
        <input value = {imagePath} onChange = { (e) => this.setState({imagePath: e.target.value})} id = 'img' data-testid="image-input"
          type = 'text' />
        </label>
        <br />

        <label htmlFor = 'storyline' data-testid="storyline-input-label">
        Sinopse
        <textarea value = {storyline} onChange = { (e) => this.setState({storyline: e.target.value})} id = 'storyline' data-testid="storyline-input"
          type = 'textarea' />
        </label>
        <br />

        <label htmlFor = 'rating' data-testid="rating-input-label">
        Avaliação
        <input value = {rating} onChange = { (e) => this.setState({rating: e.target.value})} id = 'rating' data-testid="rating-input"
          type = 'number' />
        </label>
        <br />

        <label htmlFor = 'genre' data-testid="genre-input-label">
        Gênero
          <select value = {genre} onChange = { (e) => this.setState({genre: e.target.value})} id = 'genre' data-testid="genre-input">
            <option value = 'action' data-testid="genre-option">Ação</option>
            <option value = 'comedy' data-testid="genre-option">Comédia</option>
            <option value = 'thriller' data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <br />

        <button type = 'submit' data-testid="send-button" onClick = { this.clearState }> Adicionar filme </button>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie
