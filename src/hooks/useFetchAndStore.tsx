import { useQuery } from "@tanstack/react-query"

const useFetchAndStore = (fetchFn: ()=>Promise<any>, cacheKey: string, timeToNewFetch: number) => {
  const storageKey = cacheKey
  
  const {data, isFetching} = useQuery({
    queryKey: [cacheKey],
    queryFn: async () => {
      // if data is stored and has been fetched on less than 24 hours, return storaged data
      const storageData = localStorage.getItem(storageKey)
      if (storageData !== undefined && storageData !== null){
        const storagedPodcasts = JSON.parse(storageData)
        if (Date.now() - storagedPodcasts.fetchedDate < timeToNewFetch){
          return storagedPodcasts.list
        }
      } 
      // If the data is not stored or has not been fetched within the last 24 hours, fetch the data and save it to storage.
      const data = await fetchFn()
      localStorage.setItem(storageKey, JSON.stringify({list: data, fetchedDate: Date.now()}))
      return data
    }
  })
  return {data, isFetching}
}

export default useFetchAndStore