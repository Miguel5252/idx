import React, { useEffect } from 'react'
import useFetchAndStore from '../../hooks/useFetchAndStore'
import { getPodcast } from '../../services/itunes.services'
import EpisodePlayer from './EpisodePlayer'
import { FETCH_AFTER } from '../../lib/constants'
import { useParams } from 'react-router-dom'

const Episode: React.FC = () => {
  const { podcastId, episodeId } = useParams()
  const { data } = useFetchAndStore(() => getPodcast(podcastId), `podcast-${podcastId}`, FETCH_AFTER.ONE_DAY)
  let episode
  if (data) episode = data.episodes.filter((episode: { id: string }) => episode.id.toString() === episodeId)[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {episode && (
        <>
          <EpisodePlayer episodeData={episode} />
        </>
      )}
    </div>
  )
}

export default Episode
