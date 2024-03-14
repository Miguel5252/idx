export interface PodcastResume {
  id: string
  thumbnail: string
  title: string
  author: string
}

export interface Podcast {
  profile: Profile
  episodes: EpisodeInfo[]
}

export interface Profile {
  title: string
  author: string
  description: string
  thumbnail: string
}

export interface EpisodeInfo {
  title: string
  date: string
  duration: number
  id: string
  podcastId: string
  url: string,
  description: string,
}