import React, {useEffect} from 'react'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import { getPodcast } from '../../services/itunes.services'
import EpisodePlayer from './EpisodePlayer'
import styles from '../podcast/Podcast.module.scss'
import Profile from '../podcast/Profile'
import useLoadingData from '../../hooks/useLoadingData'

interface episodeProps {
  podcastId: string | undefined
  episodeId: string | undefined
}

const Episode: React.FC<episodeProps> = ({podcastId, episodeId}) => {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const {data, isFetching} = useFetchAndStore(() => getPodcast(podcastId), `podcast-${podcastId}`, 24*60*60*1000)
  useLoadingData(data, isFetching)
  
  let content;

  if(data){
    const episode = data.episodes.filter((episode: { id: string }) => (episode.id).toString() === episodeId)[0]
    content = 
     <>
      <div className={styles.left_panel}>
        <Profile profile={data.profile} id={episode.podcastId} />
      </div>
      <div className={styles.right_panel}>
        <EpisodePlayer episodeData = {episode}/>
      </div>
    </>
  }
  
  return (
    <div className={styles.container}>
      {content}
    </div>
  )
}

export default Episode
