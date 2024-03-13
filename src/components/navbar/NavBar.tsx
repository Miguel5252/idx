
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to={'/'} className={styles.logo}>Podcaster</Link>
      </div>
    </div>
  )
}
