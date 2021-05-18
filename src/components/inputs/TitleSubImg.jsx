import React from 'react';
import PropTypes from 'prop-types';

export default function TitleSubImg(props) {
  const { handles, values } = props;
  const { title, subtitle, imagePath } = values;
  const { ChangeTitle, ChangeSubt, Changeimage } = handles;
  return (
    <div>
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          onChange={ ChangeTitle }
          value={ title }
          data-testid="title-input"
        />
      </label>
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ ChangeSubt }
        />
      </label>
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ Changeimage }
        />
      </label>
    </div>
  );
}

TitleSubImg.propTypes = {
  props: PropTypes.shape({
    handles: PropTypes.objectOf(PropTypes.func),
  }),
}.isRequired;
