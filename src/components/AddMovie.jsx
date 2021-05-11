import React from 'react';

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

    this.callback = this.callback.bind(this);
  }

  callback() {
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
    const { title, subtitle, imagePath, storyline, rating,genre } = this.state;
    const { onClick } = this.props;

    return (
      <button
        type="submit"
        onClick={ () => {
          onClick(this.state);
        } }
      >
        Adicionar
      </button>
    );
  }
}

export default AddMovie;
