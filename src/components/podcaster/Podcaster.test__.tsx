import { describe, it , beforeEach, expect, vi } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Podcaster from "./Podcaster";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";



// vi.mock('../../hooks/useFetchAndStore', ()=>{
//     vi.fn(() => {
//         return Promise.resolve([
//             {
//                 "id": "1535809341",
//                 "title": "Theeeee Joe Budden Podcast - The Joe Budden Network",
//                 "author": "The Joe Budden Network",
//                 "thumbnail": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png"
//             },
//             {
//                 "id": "1572182022",
//                 "title": "New Rory & MAL - Rory Farrell & Jamil \"Mal\" Clay & Studio71",
//                 "author": "Rory Farrell & Jamil \"Mal\" Clay & Studio71",
//                 "thumbnail": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png"
//             },
//             {
//                 "id": "1437402802",
//                 "title": "A History of Rock Music in 500 Songs - Andrew Hickey",
//                 "author": "Andrew Hickey",
//                 "thumbnail": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png"
//             }
//         ])
//     })
// })


describe('Podcaster view suite', async ()=>{

    const queryClient = new QueryClient()
   
    const WrapperProvider: React.FC<PropsWithChildren>  = ({children}) => {
        return(
            <BrowserRouter>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </Provider>
            </BrowserRouter>
        )
    }

    beforeEach(() => {
        render(
            <WrapperProvider>
                <Podcaster/>
            </WrapperProvider> 
        )
    })

    it('should render Filter', () => {
        const inputTextElement = screen.getByRole('textbox')
        expect(inputTextElement).toBeDefined()
    })

})



    // it('renders the titleof a podcastCard when data loaded', async () => {
    //     await waitFor(() => {
    //         const titleField = screen.getByText('Theeeee Joe Budden Podcast - The Joe Budden Network')
    //         expect(titleField).toBeDefined()

    //     })
    // })

    // it('renders the 3 mocked podcasts when data is loaded', async () => {
    //     await waitFor(() => {
    //         const AuthorElements = screen.getAllByText(/Author:/)
    //         console.log(AuthorElements.length)      
    //     })
    // })
    

