import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EpisodesTable from "../EpisodesTable";
import { BrowserRouter } from "react-router-dom";
import { PropsWithChildren } from "react";

describe('PodcastResume Suite', ()=>{

  const WrapperProvider: React.FC<PropsWithChildren>  = ({children}) => {
    return(
        <BrowserRouter>
              {children}
        </BrowserRouter>
    )
  }

  const dataMock =  [
    {
        "id": "1000649290739",
        "url": "https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/b6cc889b-da1d-4894-ad07-b133006943c4/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d",
        "podcastId": "1096830182",
        "title": "Episode 401 w/ Danny Brown",
        "date": "15/3/2024",
        "duration": "111:58",
        "description": "N.O.R.E. & DJ EFN are the Drink Champs in this episode the champs chop it up with the one and only, Danny Brown!\n\nDanny shares his journey in music. Danny Brown shares stories of Nas, creating music,  going through rehab and much much more! \n\nLots of great stories that you don’t want to miss!\n\nMake some noise for Danny Brown!!! 💐💐💐🏆🏆🏆 🎉🎉🎉\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\nFollow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\nDJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\nN.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\nSee omnystudio.com/listener for privacy information."
    },
    {
        "id": "1000648454938",
        "url": "https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/f900a45c-52a2-432a-aeb6-b12c006b34eb/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d",
        "podcastId": "1096830182",
        "title": "Episode 400 w/ Affion Crockett",
        "date": "8/3/2024",
        "duration": "181:36",
        "description": "N.O.R.E. & DJ EFN are the Drink Champs in this episode the champs chop it up with the one and only, Affion Crockett!\n\nAffion sits down to share his journey in comedy. A master of impressions, Affion shares stories of doing Standup, Film, and much much more!\n\nAffion talks about his new movie “A Hip Hop Story” where a pioneer of hip hop’s culture joins forces with some of rap music’s elite performers in an attempt to save hip hop.\n\n“A Hip Hop Story” is in theaters now! \n\nListen as there’s lots of great stories that you don’t want to miss!\n\nMake some noise for Affion Crockett!!! 💐💐💐🏆🏆🏆 🎉🎉🎉\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\nFollow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\nDJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\nN.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\nSee omnystudio.com/listener for privacy information."
    },
]

it('renders 2 rows of episodes', () => {
    const { container } = render(
      <WrapperProvider>
        <EpisodesTable episodes={dataMock}/>
      </WrapperProvider> 
      )

   const rows = container.querySelectorAll('tbody tr')
   expect(rows).toHaveLength(2)
  })
})