
import { getPodcast } from "../../services/itunes.services"
import useFetchAndStore from "../../hooks/useFetchAndStore"
import styles from "./Podcast.module.scss"
import Profile from "./Profile"
import EpisodesTable from "./EpisodesTable"
import useLoadingData from "../../hooks/useLoadingData"
import { useEffect } from "react"

interface PodcastProps {
  id: string
}

const Podcast: React.FC<PodcastProps> = ({id}) => {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const {data, isFetching} = useFetchAndStore(() => getPodcast(id), `podcast-${id}`, 24*60*60*1000) // funcion, key
  useLoadingData(data, isFetching)
  
  let content;

  if(data){
    content = 
     <>
      <div className={styles.left_panel}>
        <Profile profile={data.profile} id={id} />
      </div>
      <div className={styles.right_panel}>
        <div className={styles.episode_marker}>Episodes: {data.episodes.length}</div>
        <EpisodesTable episodes={data.episodes}/>
      </div>
    </>
  }
  
  return (
    <div className={styles.container}>
      {content}
    </div>
  )
}

export default Podcast

