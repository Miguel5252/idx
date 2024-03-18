import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../ui/spinners/Spinner'

export default function NavBar() {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading)
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to={'/'} className={styles.logo}>Podcaster</Link>
        <div>{isLoading && <LoadingSpinner/>}</div>
      </div>
    </div>
  )
}
