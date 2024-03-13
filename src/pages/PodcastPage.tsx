import { useParams } from "react-router-dom"
import Podcast from "../components/podcast/Podcast"

export default function PodcastPage() {
  const {podcastId} = useParams()
  return (
    <div>
      {podcastId ? <Podcast id={podcastId}/> : <div>el elemento no existe</div>}
    </div>
  )
}
