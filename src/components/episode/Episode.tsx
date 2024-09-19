import React, { useEffect } from 'react'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import { getPodcast } from '../../services/itunes.services'
import EpisodePlayer from './EpisodePlayer'
import styles from '../podcast/Podcast.module.scss'
import Profile from '../podcast/Profile'
import { FETCH_AFTER } from '../../lib/constants'

interface EpisodeProps {
  podcastId: string | undefined
  episodeId: string | undefined
}

const Episode: React.FC<EpisodeProps> = ({ podcastId, episodeId }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data } = useFetchAndStore(() => getPodcast(podcastId), `podcast-${podcastId}`, FETCH_AFTER.ONE_DAY)
  let episode
  if (data) episode = data.episodes.filter((episode: { id: string }) => episode.id.toString() === episodeId)[0]

  return (
    <div className={styles.container}>
      {episode && (
        <>
          <div className={styles.left_panel}>
            <Profile profile={data.profile} id={episode.podcastId} />
          </div>
          <div className={styles.right_panel}>
            <EpisodePlayer episodeData={episode} />
          </div>
        </>
      )}
    </div>
  )
}

export default Episode
