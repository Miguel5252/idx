import React from 'react'
import { PodcastResume } from '../../models/podcasts'
import styles from './PodcastResume.module.scss'
import { Link } from 'react-router-dom'

interface PodcastResumeProps {
  data: PodcastResume
}

const PodcastResume: React.FC<PodcastResumeProps> = ({data}) => {
  return (
    <Link to={`/podcast/${data.id}`}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={data.thumbnail} alt={data.title}></img>
        </div>
        <div className={styles.info_container}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.author}>Author: {data.author}</div>
        </div>
      </div>
    </Link>
  )
}

export default PodcastResume
