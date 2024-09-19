import { Outlet } from 'react-router-dom'
import Profile from '../components/podcast/Profile'
import useFetchAndStore from '../hooks/useFetchAndStore'
import { getPodcast } from '../services/itunes.services'
import { useParams } from 'react-router-dom'
import { FETCH_AFTER } from '../lib/constants'
import styles from './PodCastLayout.module.scss'

function PodcastLayout() {
  const { podcastId } = useParams()
  const { data } = useFetchAndStore(() => getPodcast(podcastId), `podcast-${podcastId}`, FETCH_AFTER.ONE_DAY)
  return (
    <div className={styles.container}>
      <div className={styles.left_panel}>{podcastId && data && <Profile profile={data.profile} id={podcastId} />}</div>
      <div className={styles.right_panel}>
        <Outlet />
      </div>
    </div>
  )
}

export default PodcastLayout
