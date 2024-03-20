import { useQuery } from "@tanstack/react-query"

const useFetchAndStore = (fetchFn: () => Promise<any>, cacheKey: string, timeToNewFetch: number) => {
  const storageData = JSON.parse(localStorage.getItem('cache_data') || '{}');

  const { data, isFetching } = useQuery({
    queryKey: [cacheKey],
    queryFn: async () => {
      const cachedItem = storageData[cacheKey];

      if (cachedItem && Date.now() - cachedItem.fetchedDate < timeToNewFetch) {
        return cachedItem.list;
      }

      const newData = await fetchFn();
      storageData[cacheKey] = { list: newData, fetchedDate: Date.now() };
      localStorage.setItem('cache_data', JSON.stringify(storageData));
      return newData;
    }
  });
  
  return { data, isFetching };
};

export default useFetchAndStore;
