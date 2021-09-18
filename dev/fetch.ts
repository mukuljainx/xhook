const api = (URL) => {
  const options = {
    headers: {
      Accept: 'application/json',
      card: '111',
    },
  };

  console.log('before', options.headers);

  fetch(URL.get, options).then(() => {
    console.log('after', options.headers);
  });
};

export default api;
