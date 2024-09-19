import { useParams } from 'react-router-dom'
import Episode from '../components/episode/Episode'

export default function EpisodePage() {
  const { podcastId, episodeId } = useParams()
  return <Episode podcastId={podcastId} episodeId={episodeId} />
}
