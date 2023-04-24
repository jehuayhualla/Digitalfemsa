import useSWR from 'swr';

import fetcher from '../libs/fetcher';

const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR('/products', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useProducts;