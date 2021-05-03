const kindOfMovies = [
  {
    kindMovieText: 'Todos',
    kindMovieValue: '',
    id: 1,
  },
  {
    kindMovieText: 'Ação',
    kindMovieValue: 'action',
    id: 2,
  },
  {
    kindMovieText: 'Comédia',
    kindMovieValue: 'comedy',
    id: 3,
  },
  {
    kindMovieText: 'Suspense',
    kindMovieValue: 'thriller',
    id: 4,
  },
];

const inputs = {
  inputText: {
    label: {
      testId: 'text-input-label',
      control: 'text-input',
      text: 'Inclui o texto',
    },
    input: {
      'data-testid': 'text-input',
      type: 'text',
    },
  },
  inputCheckbox: {
    label: {
      testId: 'checkbox-input-label',
      control: 'checkbox-input',
      text: 'Mostrar somente favoritos',
    },
    input: {
      'data-testid': 'checkbox-input',
      type: 'checkbox',
    },
  },
};
export { kindOfMovies, inputs };
