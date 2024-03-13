
import styles from './Profile.module.scss'


const Profile = ({profile}) => {
  return (
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
  )
}

export default Profile