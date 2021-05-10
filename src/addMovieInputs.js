const inputs = [
  {
    label: 'title-input-label',
    text: 'Título',
    input: 'title-input',
    name: 'title',
  },
  {
    label: 'subtitle-input-label',
    text: 'Subtítulo',
    input: 'subtitle-input',
    name: 'subtitle',
  },
  {
    label: 'image-input-label',
    text: 'Imagem',
    input: 'image-input',
    name: 'imagePath',
  },
  {
    CustomTag: 'textarea',
    label: 'storyline-input-label',
    text: 'Sinopse',
    input: 'storyline-input',
    name: 'storyline',
  },
  {
    label: 'rating-input-label',
    text: 'Avaliação',
    input: 'rating-input',
    name: 'rating',
    type: 'number',
  },
];

const optionId = 'genre-option';
const selects = [
  {
    label: 'genre-input-label',
    select: 'genre-input',
    name: 'genre',
    text: 'Gênero',
    options: [
      {
        id: optionId,
        value: 'action',
        text: 'Ação',
      },
      {
        id: optionId,
        value: 'comedy',
        text: 'Comédia',
      },
      {
        id: optionId,
        value: 'thriller',
        text: 'Suspense',
      },
    ],
  },
];

export { inputs, selects };
