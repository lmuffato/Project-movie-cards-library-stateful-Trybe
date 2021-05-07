import React from 'react';

export default class AddMovie extends React.Component {
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

  changeHandler = (ev) => {
    this.setState({[ev.target.name]: ev.target.value});
  }
  render() {
    const {subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input name="title" data-testid="title-input" value={ title } onChange={ this.changeHandler } />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input type="text" name="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={this.changeHandler}/>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input type="text" name="imagePath" value={ imagePath } data-testid="image-input" onChange={this.changeHandler}/>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea name="storyline" value={ storyline } data-testid="storyline-input" onChange={this.changeHandler}></textarea>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input type="number" name="rating" data-testid="rating-input" value={ rating } onChange={this.changeHandler}></input>
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select name="genre" value={ genre } data-testid="genre-input" onChange={ this.changeHandler }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </form>
    );
  }
}
