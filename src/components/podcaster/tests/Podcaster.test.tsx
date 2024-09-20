import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient } from '@tanstack/react-query'
import Podcaster from '../Podcaster'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import user from '@testing-library/user-event'
import useFetchAndStore from '../../../hooks/useFetchAndStore'

describe('Podcaster suite', async () => {
  const mockedResponse = {
    data: [
      {
        id: '1',
        title: 'Title 1',
        author: 'author 1',
        thumbnail: 'https://image1.png',
      },
      {
        id: '2',
        title: 'title 2',
        author: 'Author 2',
        thumbnail: 'https://image2.png',
      },
      {
        id: '3',
        title: 'title 3',
        author: 'Author 3',
        thumbnail: 'https://image3.png',
      },
    ],
    isFetching: false,
  }

  vi.mock('../../../hooks/useFetchAndStore')
  vi.mocked(useFetchAndStore).mockReturnValue(mockedResponse)

  const queryClient = new QueryClient()

  const WrapperProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </BrowserRouter>
    )
  }

  const renderComponent = () => {
    render(
      <WrapperProvider>
        <Podcaster />
      </WrapperProvider>
    )
  }

  it('should render a Filter element', () => {
    renderComponent()
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
  })

  it('changes input text when typing on filter', async () => {
    renderComponent()
    const input = screen.getByRole('textbox')
    await user.click(input)
    await user.type(input, '123')
    expect((input as HTMLInputElement).value).toBe('123')
  })

  it('should show 3 items when data is loaded', async () => {
    vi.mocked(useFetchAndStore).mockReturnValue(mockedResponse)
    renderComponent()
    const podcasts = await screen.findAllByRole('heading')
    expect(podcasts).toHaveLength(3)
  })

  it('should filter to 1 element and shows when typing "Title 1', async () => {
    vi.mocked(useFetchAndStore).mockReturnValue(mockedResponse)
    renderComponent()
    const filter = await screen.findByRole('textbox')
    await user.click(filter)
    await user.keyboard('Title 1')
    const podcasts = screen.getAllByRole('heading')
    expect(podcasts).toHaveLength(1)
  })

  it('should filter to 1 element when typing "Title 1', async () => {
    vi.mocked(useFetchAndStore).mockReturnValue(mockedResponse)
    renderComponent()
    const filter = await screen.findByRole('textbox')
    await user.click(filter)
    await user.keyboard('Title 1')
    const podcasts = screen.getAllByRole('heading')
    expect(podcasts).toHaveLength(1)
  })

  it('should show filter error when there are no podcast to show', async () => {
    vi.mocked(useFetchAndStore).mockReturnValue(mockedResponse)
    renderComponent()
    const filter = await screen.findByRole('textbox')
    await user.click(filter)
    await user.keyboard('abcdefg')
    const podcasts = screen.queryAllByRole('heading')
    expect(podcasts).toHaveLength(0)
  })
})
