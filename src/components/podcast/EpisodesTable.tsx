import React from 'react'
import { type EpisodeInfo } from '../../models/podcasts'
import styles from './EpisodesTable.module.scss'


const EpisodesTable: React.FC<EpisodeInfo> = ({episodes}) => {
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
          <tr className={styles.tr} key={episode.id}>
            <td className={`${styles.td} ${styles.title}`}>{episode.title}</td>
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