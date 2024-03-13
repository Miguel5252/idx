import { getPodcastslist, getPodcastById } from "../apis/itunes.api"
import { podcastListMapper, podcastMapper } from "../mappers/itunes.mapper"

export async function getPodcastsList() {
  const podcastListResponse = await getPodcastslist()
  const mappedPodcastList = podcastListMapper(podcastListResponse)
  return mappedPodcastList
}

export async function getPodcast(id:string) {
  const podcastListResponse = await getPodcastById(id)
  const mappedPodcast= podcastMapper(podcastListResponse)
  console.log(mappedPodcast)
  return mappedPodcast
}