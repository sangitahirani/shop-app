import axios from 'axios';

export const getProducts = async () => {
  const resp = await axios.get(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
  );
  if (resp.status === 200) return resp.data;
  else throw new Error('Invalid response');
};
