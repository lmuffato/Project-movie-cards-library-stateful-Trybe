import React from 'react';

class AddMovie extends React.Component {
  constructor(){
    super()

    this.changeHandle = this.changeHandle.bind(this)

    this.state={
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

   changeHandle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value 
    })
  }


  render(){


    
    return(
      <div>
        <label
        data-testid="title-input-label"
        >
        Título
          <input 
          data-testid="title-input"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.changeHandle}
          >
          </input>
        </label>

        <label>
        Subtítulo
          <input 
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.changeHandle}
          >
          </input>
        </label>

        <label>
        Imagem
          <input 
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.changeHandle}
          >
          </input>
        </label>

        <label>
        Sinopse
          <input 
          type="text"
          name="storyline"
          value={this.state.storyline}
          onChange={this.changeHandle}
          >
          </input>
        </label>

        <label>
        Avaliação
          <input 
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={this.changeHandle}
          >
          </input>
        </label>

        <label>
        Gênero
          <select 
          value={this.state.genre}
          name="selectedGenre">
          onChange={this.changeHandle}
          <option name="selectedGenre" value="">Todos</option>
          <option name="selectedGenre" value="action">Ação</option>
          <option name="selectedGenre" value="comedy">Comédia</option>
          <option name="selectedGenre" value="thriller">Suspense</option>
          </select>
        </label>

      </div>
    )
  }
}

export default AddMovie;