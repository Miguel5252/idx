import React from 'react'
import { type EpisodeInfo } from '../../models/podcasts'
import styles from './EpisodesTable.module.scss'
import { Link } from 'react-router-dom'

interface EpisodesTableProps {
  episodes: EpisodeInfo[]
}

const EpisodesTable: React.FC<EpisodesTableProps> = ({episodes}) => {
  return (
    <div className={styles.container}>
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(episode => {
          return (
              <tr key={episode.id} className={styles.tr}>
                <td className={`${styles.td} ${styles.title}`}>
                  <Link  to={`/podcast/${episode.podcastId}/episode/${episode.id}`}>
                    {episode.title}
                  </Link>
                </td >
                <td className={styles.td}>{episode.date}</td>
                <td className={styles.td}>{episode.duration}</td>
              </tr>
            )
          })}
      </tbody>
  </table>
  </div>
  )
}

export default EpisodesTable