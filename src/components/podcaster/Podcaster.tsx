import PodcastList from './PodcastList'
import { useState } from 'react'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import PodcastResume from './PodcastResume'
import styles from './Podcaster.module.scss'
import Filter from './Filter'
import { getPodcastsList } from '../../services/itunes.services'
import useLoadingData from '../../hooks/useLoadingData'

function Podcaster() {
  const [filterInput, setFilterInput] = useState('')
  const {data, isFetching} = useFetchAndStore(getPodcastsList, 'podcasterList', 24*60*60*1000)
  useLoadingData(data, isFetching);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setFilterInput(query)
  }
  
  // Data filter
  let filteredPodcasts ;
  if(data){
    filteredPodcasts = data.filter((podcast: PodcastResume) => (podcast.title.toLowerCase().includes(filterInput.toLowerCase()) || podcast.author.toLowerCase().includes(filterInput.toLowerCase())))
  }
 
  return (
    <div className={styles.container}>
      <Filter 
        inputText={filterInput}
        onChange={handleChangeFilter}
        filteredNumber={filteredPodcasts ? filteredPodcasts.length : 0}
        />
      {filteredPodcasts && filteredPodcasts.length > 0 && !isFetching
      ? <PodcastList list={filteredPodcasts}/> 
      : <div className={styles.no_results}>No se encontraron resultados para esta búsqueda. Prueba a modificar el término de búsqueda.</div>}
    </div> 
  )
}
export default Podcaster
