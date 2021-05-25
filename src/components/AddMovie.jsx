import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form>
        <textarea name="subtitle" />
        <textarea name="title" />
        <textarea name="imagePath" />
        <textarea name="storyLine" />
        <select name="rating">rating</select>
        <select name="genre">genre</select>
      </form>
    );
  }
}

export default AddMovie;
