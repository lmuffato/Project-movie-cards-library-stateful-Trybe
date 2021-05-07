import React from 'react';
import Input from './Input';

class ComSearchOne extends React.Component {
  render() {
    const { title, subtitle, imagePath, onSearchTextChange } = this.props;

    return (
      <div>
        <Input
          inputType="text"
          datatestidLabel="title-input-label"
          textLabel="Título"
          searchText={ title }
          datatestid="title-input"
          onSearchTextChange={ onSearchTextChange }
        />
        <Input
          inputType="text"
          textLabel="Subtítulo"
          datatestidLabel="subtitle-input-label"
          searchText={ subtitle }
          datatestid="subtitle-input"
          onSearchTextChange={ onSearchTextChange }
        />
        <Input
          inputType="text"
          textLabel="Imagem"
          datatestidLabel="image-input-label"
          searchText={ imagePath }
          datatestid="image-input"
          onSearchTextChange={ onSearchTextChange }
        />
      </div>
    );
  }
}

export default ComSearchOne;
