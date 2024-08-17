const initailData = {
  scrollTo: 0,
  productsArray: [
    {
      id: 1,
      name: 'lakme',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 2,
      name: 'nature',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 3,
      name: 'paris london',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 4,
      name: 'suchit',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 5,
      name: 'alovera',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 6,
      name: 'aloies',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 7,
      name: 'ravlon',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 8,
      name: 'lakme5',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 9,
      name: 'lakme7',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 10,
      name: 'lakme12',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 11,
      name: 'lakme',
      type: 'skin',
      expiratoin: '2026',
    },
    {
      id: 12,
      name: 'nature',
      type: 'skin',
      expiratoin: '2026',
    },
  ],
};
const productReducers = (state = initailData, action) => {
  if (action.type === 'getProducts') {
    console.log('hello ji', state.productsArray);
    return state.productsArray;
  }
  if (action.type === 'deleteProducts') {
    const arr = state.productsArray.filter((item) => item.id !== action.payload.id);
    state = {
      productsArray: arr,
      scrollTo: action.payload.scrollTo,
    };
    console.log('hello ji77', state.productsArray);

    return state;
  }

  console.log('hello ji2', state.productsArray);
  return state;
};

export default productReducers;
