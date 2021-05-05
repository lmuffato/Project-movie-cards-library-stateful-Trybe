const dataTestOptionAdd = 'genre-option';
const dataTestOptionFilter = 'select-option';
const dataComp = {
  labels: {
    title: 'Título',
    subtitle: 'Subtítulo',
    imagePath: 'Imagem',
    storyline: 'Sinopse',
    rating: 'Avaliação',
    genre: 'Gênero',
  },
  genreOptionsAdd: [
    { name: 'Ação', value: 'action', 'data-testid': dataTestOptionAdd },
    { name: 'Comédia', value: 'comedy', 'data-testid': dataTestOptionAdd },
    { name: 'Suspense', value: 'thriller', 'data-testid': dataTestOptionAdd },
  ],
  genreOpts: [
    { name: 'Todos', value: '', 'data-testid': dataTestOptionFilter },
    { name: 'Ação', value: 'action', 'data-testid': dataTestOptionFilter },
    { name: 'Comédia', value: 'comedy', 'data-testid': dataTestOptionFilter },
    { name: 'Suspense', value: 'thriller', 'data-testid': dataTestOptionFilter },
  ],
  typeInput: {
    title: 'text',
    subtitle: 'text',
    imagePath: 'text',
    storyline: 'textarea',
    rating: 'number',
    genre: 'select',
  },
};

export default dataComp;
