
import { Link } from 'react-router-dom'
import styles from './Profile.module.scss'
import { Profile } from '../../models/podcasts'

interface ProfilePorps {
  profile: Profile
  id: string
}

const Profile: React.FC<ProfilePorps> = ({profile, id}) => {
  return (
    <Link to={`/podcast/${id}`}>
    <div className={styles.container}>
      <div className={styles.section}>
        <img className={styles.image} src={profile.thumbnail}></img>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>{profile.title}</div>
        <div className={styles.description}>By {profile.author}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Description</div>
        <div className={styles.description}>{profile.description}</div>
      </div>
    </div>
    </Link>
  )
}

export default Profile