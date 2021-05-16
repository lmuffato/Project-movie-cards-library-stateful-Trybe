import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './addMovie/InputTitle';
import Subtitle from './addMovie/InputSubtitle';
import Image from './addMovie/InputImg';
import TextArea from './addMovie/InputTextArea';
import Number from './addMovie/InputNumber';
import Select from './addMovie/Select';
import Button from './addMovie/Button';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSub = this.handleChangeSub.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSto = this.handleChangeSto.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    // this.setState({ [searchText]: event.target.value });
    this.setState({ title: value });
  }

  handleChangeSub(event) {
    const { value } = event.target;
    this.setState({ subtitle: value });
  }

  handleChangeImage(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  handleChangeSto(event) {
    const { value } = event.target;
    this.setState({ storyline: value });
  }

  handleChangeRating(event) {
    const { value } = event.target;
    this.setState({ rating: value });
  }

  handleChangeGenre(event) {
    const { value } = event.target;
    this.setState({ genre: value });
  }

  handleFunction(event) {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle searchText={ title } onSearchTextChange={ this.handleChange } />
        <Subtitle searchText={ subtitle } onSearchTextChange={ this.handleChangeSub } />
        <Image searchText={ imagePath } onSearchTextChange={ this.handleChangeImage } />
        <TextArea searchText={ storyline } onSearchTextChange={ this.handleChangeSto } />
        <Number searchText={ rating } onSearchTextChange={ this.handleChangeRating } />
        <Select searchText={ genre } onSearchTextChange={ this.handleChangeGenre } />
        <Button functionClick={ this.handleFunction } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
