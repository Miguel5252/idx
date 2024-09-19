import { getPodcast } from '../../services/itunes.services'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import styles from './Podcast.module.scss'
import Profile from './Profile'
import EpisodesTable from './EpisodesTable'
import { useEffect } from 'react'
import { FETCH_AFTER } from '../../lib/constants'

interface PodcastProps {
  id: string
}

const Podcast: React.FC<PodcastProps> = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data } = useFetchAndStore(() => getPodcast(id), `podcast-${id}`, FETCH_AFTER.ONE_DAY)

  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.left_panel}>
            <Profile profile={data.profile} id={id} />
          </div>
          <div className={styles.right_panel}>
            <div className={styles.episode_marker}>Episodes: {data.episodes.length}</div>
            <EpisodesTable episodes={data.episodes} />
          </div>
        </>
      )}
    </div>
  )
}

export default Podcast
