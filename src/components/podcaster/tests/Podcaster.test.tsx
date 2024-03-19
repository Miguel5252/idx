
import { describe, it , beforeEach, expect } from "vitest";
import { render, screen, waitFor, within } from '@testing-library/react';
import { QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Podcaster from "../Podcaster";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import user from '@testing-library/user-event'

describe('Podcaster suite', async ()=>{

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

    it('should render a Filter elements', () => {
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()
    })

    it('changes input text when typing on filter', async () => {
        const input = screen.getByRole('textbox')
        await user.click(input)
        await user.type(input, '123')
        expect((input as HTMLInputElement).value).toBe('123')
    })
    
    it('should show text error when there are no podcast to show', () =>{
        const errorText = screen.getByText(/No se encontraron resultados/i)
        expect(errorText).toBeDefined
    })

    it('should show 100 items when data is loaded', async () =>{
        const podcasts = await screen.findAllByRole('heading')
        expect(podcasts).toHaveLength(100)
    })
  
})

    

