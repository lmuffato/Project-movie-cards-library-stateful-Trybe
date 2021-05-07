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
    this.setState({title: ev.target.value});
  }
  render() {
    const {subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input name="title" data-testid="title-input" value={ title } onChange={ this.changeHandler } />
      </form>
    );
  }
}
