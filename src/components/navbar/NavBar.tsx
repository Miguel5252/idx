import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../ui/spinners/Spinner'
import { useIsFetching } from '@tanstack/react-query'

export default function NavBar() {
  const isLoading = useIsFetching()
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to={'/'} className={styles.logo}>
          Podcaster
        </Link>
        <div>{isLoading ? <LoadingSpinner /> : null}</div>
      </div>
    </div>
  )
}
