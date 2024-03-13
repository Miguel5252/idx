export interface PodcastResume {
  id: string
  thumbnail: string
  title: string
  author: string
}

export interface Podcast {
  profile: {
    title: string
    author: string
    description: string
    thumbnail: string
  };
  episodes: EpisodeInfo[]
}

export interface EpisodeInfo {
  title: string
  date: string
  duration: number
  id: string
}