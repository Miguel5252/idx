import { Link } from 'react-router-dom'
import styles from './Profile.module.scss'
import { type Profile } from '../../models/podcasts'

interface ProfilePorps {
  profile: Profile
  id: string
}

const Profile: React.FC<ProfilePorps> = ({ profile, id }) => {
  return (
    <Link to={`/podcast/${id}`}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img className={styles.image} src={profile.thumbnail}></img>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>{profile.title}</h3>
          <div className={styles.description}>By {profile.author}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Description</div>
          <p className={styles.description}>{profile.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Profile
