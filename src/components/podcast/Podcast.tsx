import { getPodcast } from '../../services/itunes.services'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import styles from './Podcast.module.scss'
import EpisodesTable from './EpisodesTable'
import { useEffect } from 'react'
import { FETCH_AFTER } from '../../lib/constants'
import { useParams } from 'react-router-dom'

const Podcast: React.FC = () => {
  const { podcastId } = useParams()
  const { data } = useFetchAndStore(() => getPodcast(podcastId), `podcast-${podcastId}`, FETCH_AFTER.ONE_DAY)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {data && (
        <>
          <div className={styles.panel}>
            <div className={styles.episode_marker}>Episodes: {data.episodes.length}</div>
            <EpisodesTable episodes={data.episodes} />
          </div>
        </>
      )}
    </div>
  )
}

export default Podcast
