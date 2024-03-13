
export async function getPodcastslist (){
  try {
    const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log(error)
  }
}

export async function getPodcastById (id:string){
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id='+id+'&media=podcast&entity=podcastEpisode&limit=20')}`)
    const stringData = await response.json()
    const data = JSON.parse(stringData.contents)
    console.log(data)
    return data
  }
  catch (error) {
    console.log(error)
  }
}