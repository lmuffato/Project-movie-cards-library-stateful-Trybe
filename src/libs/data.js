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
  SearchBar: {
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
  },
  AddMovie: {
    inputTitle: {
      label: {
        testId: 'title-input-label',
        control: 'title-input',
        text: 'Título',
      },
      input: {
        'data-testid': 'title-input',
        type: 'text',
        name: 'title',
      },
    },
    inputSubtitle: {
      label: {
        testId: 'subtitle-input-label',
        control: 'subtitle-input',
        text: 'Subtítulo',
      },
      input: {
        'data-testid': 'subtitle-input',
        type: 'text',
        name: 'subtitle',
      },
    },
    inputImage: {
      label: {
        testId: 'image-input-label',
        control: 'image-input',
        text: 'Imagem',
      },
      input: {
        'data-testid': 'image-input',
        type: 'text',
        name: 'imagePath',
      },
    },
    inputNumber: {
      label: {
        testId: 'rating-input-label',
        control: 'rating-input',
        text: 'Avaliação',
      },
      input: {
        'data-testid': 'rating-input',
        type: 'text',
        name: 'rating',
      },
    },
  },
};
export { kindOfMovies, inputs };
