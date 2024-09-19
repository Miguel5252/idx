import { getPodcastslist, getPodcastById } from '../apis/itunes.api'
import { podcastListMapper, podcastMapper } from '../mappers/itunes.mapper'

export async function getPodcastsList() {
  const podcastListResponse = await getPodcastslist()
  const mappedPodcastList = podcastListMapper(podcastListResponse)
  return mappedPodcastList
}

export async function getPodcast(id: string | undefined) {
  if (id) {
    const podcastListResponse = await getPodcastById(id)
    const mappedPodcast = podcastMapper(podcastListResponse)
    return mappedPodcast
  } else {
    console.log('El elemento no ha sido encontrado')
  }
}
