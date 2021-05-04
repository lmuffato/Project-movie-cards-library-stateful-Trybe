import React from 'react';

class App extends React.Component {
  constructor({ onClick }) {
    super(onClick);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">

      </form>
    );
  }
}

export default App;
