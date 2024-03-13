import React from 'react'
import {PodcastResume} from '../../models/podcasts'
import Podcast from './PodcastResume'
import styles from './PodcastList.module.scss'

interface PodcastListProps {
  list: PodcastResume[]
}

const PodcastList: React.FC<PodcastListProps> = ({list}) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {list.map(podcast => <Podcast key={podcast.id} data={podcast}/>)}
      </div>
    </div>
  )
}

export default PodcastList
