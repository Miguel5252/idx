import { EpisodeInfo } from "../../models/podcasts";
import styles from './EpisodePlayer.module.scss'

interface EpisodeProps {
  episodeData: EpisodeInfo
}

const EpisodePlayer: React.FC<EpisodeProps> = ({episodeData}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>{episodeData.title}</h2>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: episodeData.description} }></div>
      </div>
      <div className={styles.audioContainer}>
        <audio controls className={styles.audio}>
          <source src={episodeData.url} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default EpisodePlayer;