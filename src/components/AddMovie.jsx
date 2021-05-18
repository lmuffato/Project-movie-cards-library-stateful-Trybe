import React, { Component } from 'react';
import data from '../data';
import TitleSubImg from './inputs/TitleSubImg';
import StLineRatingGender from './inputs/StLineRatingGender';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      alert: '',
      alertStyle: '',
    };
  }

  handles = {
    ChangeTitle: (e) => this.setState({ title: e.target.value }),
    ChangeSubt: (e) => this.setState({ subtitle: e.target.value }),
    Changeimage: (e) => this.setState({ imagePath: e.target.value }),
    ChangeSl: (e) => this.setState({ storyline: e.target.value }),
    ChangeRating: (e) => this.setState({ rating: e.target.value }),
    ChangeGenre: (e) => this.setState({ genre: e.target.value }),
  };

  createNewMovie = ({
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  }) => {
    const movie = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    data.push(movie);
  }

  AlertError = () => {
    const alertTime = 1000;
    this.setState({
      alert: 'Todos espaços precisam ser preenchidos corretamente.',
      alertStyle: 'red',
    });
    setTimeout(() => {
      this.setState({ alert: '', alertStyle: '' });
    }, alertTime);
  }

  AlertSucess = () => {
    const alertTime = 1000;
    this.setState({ alert: 'Filme Adicionado!', alertStyle: 'green' });
    setTimeout(() => {
      this.setState({ alert: '', alertStyle: '' });
    }, alertTime);
  };

  SubmitNewCard = (e) => {
    e.preventDefault();
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const check = [];
    for (let index = 0; index < Object.keys(this.state).length - 2; index += 1) {
      if (Object.values(this.state)[index] === '') {
        check.push(true);
      } else {
        check.push(false);
      }
    }
    if (check.includes(true)) {
      this.AlertError();
    } else {
      this.createNewMovie({
        subtitle,
        title,
        imagePath,
        storyline,
        rating,
        genre });
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
      this.AlertSucess();
    }
  };

  render() {
    const { alert, alertStyle } = this.state;
    return (
      <form className="add-movie" data-testid="add-movie-form">
        <TitleSubImg handles={ this.handles } values={ this.state } />
        <StLineRatingGender handles={ this.handles } values={ this.state } />
        <button type="submit" data-testid="send-button" onClick={ this.SubmitNewCard }>
          Adicionar filme
        </button>
        <p id="alert" style={ { backgroundColor: alertStyle } }>{ alert }</p>
      </form>
    );
  }
}

export default AddMovie;
