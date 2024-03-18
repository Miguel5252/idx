import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PodcastResume from "./PodcastResume";
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

  const dataMock =  { 
      id: "1535809341",
      title: "Theeeee Joe Budden Podcast - The Joe Budden Network",
      author: "The Joe Budden Network",
      thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png"
    }

  it('renders title, author, image and anchor', () => {
    render( 
      <WrapperProvider>
        <PodcastResume data={dataMock}/>
      </WrapperProvider> 
      )

    const title = screen.getByRole('heading')
    const author = screen.getByText(/Author/)
    const image = screen.getByRole('img')
    const link = screen.getByRole('link')
    
    expect(title).toBeDefined()
    expect(author).toBeDefined()
    expect(image).toBeDefined()
    expect(link).toBeDefined()
  })
})