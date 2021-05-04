import React from 'react';

import { shape, string, func } from 'prop-types';

import { tags, moviesAddMovie, kindOfMovies } from '../libs/data';

import Option from './Option';

function Label(props) {
  const { labelInfo, inputExtraInfo, inputMainInfo } = props;
  const { testId, control, text } = labelInfo;
  const { tag } = inputExtraInfo;
  const Tag = tags[tag];
  const dataMovies = testId === 'genre-input-label' ? moviesAddMovie : kindOfMovies;
  const dataIdOption = testId === 'genre-input-label' ? 'genre-option' : 'select-option';

  if (tag === 'select') {
    return (
      <label data-testid={ testId } htmlFor={ control }>
        {text}

        <Tag { ...inputMainInfo } { ...inputExtraInfo }>
          {dataMovies.map((kindOfMovie) => (
            <Option
              key={ kindOfMovie.id }
              movie={ kindOfMovie }
              dataId={ dataIdOption }
            />
          ))}
        </Tag>

      </label>
    );
  }

  return (
    <label data-testid={ testId } htmlFor={ control }>
      {text}
      <Tag { ...inputMainInfo } { ...inputExtraInfo } />
    </label>
  );
}

Label.propTypes = {
  labelInfo: shape({
    testId: string.isRequired,
    control: string.isRequired,
    text: string.isRequired,
  }).isRequired,

  inputExtraInfo: shape({
    'data-testid': string.isRequired,
    tag: string.isRequired,
  }).isRequired,

  inputMainInfo: shape({
    onChange: func.isRequired,
  }).isRequired,
};

export default Label;
