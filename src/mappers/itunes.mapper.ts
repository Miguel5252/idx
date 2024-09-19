import { PodcastResume, Podcast } from '../models/podcasts'
import { formatDate, formatDuration } from '../utils/dateAndTime'

// eslint-disable-next-line
export function podcastListMapper(data: any): PodcastResume[] {
  const podcastList = data.feed.entry
  const mappedPodcastList: PodcastResume[] = []

  // eslint-disable-next-line
  podcastList.forEach((podcast: any) => {
    const podcastResume = {
      id: podcast.id.attributes['im:id'].toString(),
      title: podcast.title.label,
      author: podcast['im:artist'].label,
      thumbnail: podcast['im:image'][2].label,
    }
    mappedPodcastList.push(podcastResume)
  })

  return mappedPodcastList
}

// eslint-disable-next-line
export function podcastMapper(data: any): Podcast {
  const profile = data.results[0]
  const episodes = data.results.slice(1, data.resultCount)
  const podcast = {
    profile: {
      title: profile.collectionName,
      author: profile.artistName,
      description: episodes[0].description,
      thumbnail: profile.artworkUrl600,
    },
    // eslint-disable-next-line
    episodes: episodes.map((episode: any) => ({
      id: episode.trackId.toString(),
      url: episode.episodeUrl,
      podcastId: episode.collectionId.toString(),
      title: episode.trackName,
      date: formatDate(episode.releaseDate),
      duration: episode.trackTimeMillis ? formatDuration(episode.trackTimeMillis) : '-',
      description: episode.description,
    })),
  }
  return podcast
}
