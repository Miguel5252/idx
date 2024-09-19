import React from 'react'
import { type PodcastResume } from '../../models/podcasts'
import styles from './PodcastResume.module.scss'
import { Link } from 'react-router-dom'

interface PodcastResumeProps {
  data: PodcastResume
}

const PodcastResume: React.FC<PodcastResumeProps> = ({ data }) => {
  return (
    <Link to={`/podcast/${data.id}`}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={data.thumbnail} alt={data.title}></img>
        </div>
        <div className={styles.info_container}>
          <h3 className={styles.title}>{data.title.split('-')[0]}</h3>
          <div className={styles.author}>Author: {data.author}</div>
        </div>
      </div>
    </Link>
  )
}

export default PodcastResume
