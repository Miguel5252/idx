import PodcastList from './PodcastList'
import { useState } from 'react'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import PodcastResume from './PodcastResume'
import styles from './Podcaster.module.scss'
import Filter from './Filter'
import { getPodcastsList } from '../../services/itunes.services'
import { FETCH_AFTER } from '../../lib/constants'

function Podcaster() {
  const [filterInput, setFilterInput] = useState('')
  const { data, isFetching } = useFetchAndStore(getPodcastsList, 'podcasterList', FETCH_AFTER.ONE_DAY)

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setFilterInput(query)
  }

  // Data filter
  let filteredPodcasts
  if (data) {
    filteredPodcasts = data.filter(
      (podcast: PodcastResume) =>
        podcast.title.split('-')[0].toLowerCase().includes(filterInput.toLowerCase()) ||
        podcast.author.toLowerCase().includes(filterInput.toLowerCase())
    )
  }

  return (
    <div className={styles.container}>
      <Filter inputText={filterInput} onChange={handleChangeFilter} filteredNumber={filteredPodcasts ? filteredPodcasts.length : 0} />
      {filteredPodcasts && filteredPodcasts.length > 0 && !isFetching ? (
        <PodcastList list={filteredPodcasts} />
      ) : (
        !isFetching && (
          <div className={styles.no_results}>
            No se encontraron resultados para esta búsqueda. Prueba a modificar el término de búsqueda.
          </div>
        )
      )}
    </div>
  )
}
export default Podcaster
