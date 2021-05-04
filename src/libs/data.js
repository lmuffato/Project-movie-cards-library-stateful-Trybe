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

const moviesAddMovie = [
  {
    kindMovieText: 'Ação',
    kindMovieValue: 'action',
    id: 1,
  },
  {
    kindMovieText: 'Comédia',
    kindMovieValue: 'comedy',
    id: 2,
  },
  {
    kindMovieText: 'Suspense',
    kindMovieValue: 'thriller',
    id: 3,
  },
];

const initialStateAddMovie = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const typesSearchBar = {
  text: 'value',
  checkbox: 'checked',
};

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
        tag: 'input',
      },
      propsInfo: {
        onChange: 'onSearchTextChange',
        state: 'searchText',
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
        tag: 'input',
      },
      propsInfo: {
        onChange: 'onBookmarkedChange',
        state: 'bookmarkedOnly',
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
        tag: 'input',
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
        tag: 'input',
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
        tag: 'input',
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
        type: 'number',
        name: 'rating',
        tag: 'input',
      },
    },
    textaArea: {
      label: {
        testId: 'storyline-input-label',
        control: 'storyline-input',
        text: 'Sinopse',
      },
      input: {
        'data-testid': 'storyline-input',
        name: 'storyline',
        tag: 'textarea',
      },
    },
    select: {
      label: {
        testId: 'genre-input-label',
        control: 'genre-input',
        text: 'Gênero',
      },
      input: {
        'data-testid': 'genre-input',
        name: 'genre',
        tag: 'select',
      },
    },
  },
};

const tags = {
  input: 'input',
  textarea: 'textarea',
  select: 'select',
};

export { kindOfMovies, inputs, tags, moviesAddMovie, initialStateAddMovie, typesSearchBar };
