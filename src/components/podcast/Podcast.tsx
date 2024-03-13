
import { getPodcast } from "../../services/itunes.services"
import useFetchAndStore from "../../hooks/useFetchAndStore"
import styles from "./Podcast.module.scss"
import Profile from "./Profile"
import EpisodesTable from "./EpisodesTable"
import { type EpisodeInfo } from "../../models/podcasts"

interface PodcastProps {
  id: string
}

const Podcast: React.FC<PodcastProps> = ({id}) => {

  const {data} = useFetchAndStore(() => getPodcast(id), `podcast-${id}`, 24*60*60*1000) // funcion, key
  

  return (
    <div className={styles.container}>
      {data && 
      <>
      <div className={styles.left_panel}>
        <Profile profile={data.profile} />
      </div>
      <div className={styles.right_panel}>
        <div className={styles.episode_marker}>Episodes: {data.episodes.length}</div>
        <EpisodesTable episodes={data.episodes}/>
      </div>
      </>
    }
    </div>
  )
}

export default Podcast

