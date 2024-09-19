import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Profile from '../Profile'
import { BrowserRouter } from 'react-router-dom'
import { PropsWithChildren } from 'react'

describe('PodcastResume Suite', () => {
  const WrapperProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>
  }

  const dataMock = {
    title: 'The Podcast title',
    author: 'Author 1',
    description: 'podcast description...',
    thumbnail: 'https://image.jpg',
  }

  it('renders image, title, author, link and description when data is provided', () => {
    render(
      <WrapperProvider>
        <Profile profile={dataMock} id="123" />
      </WrapperProvider>
    )

    const title = screen.getByRole('heading')
    const author = screen.getByText(/By Author 1/i)
    const image = screen.getByRole('img')
    const link = screen.getByRole('link')
    const description = screen.getByText(/podcast description.../i)

    expect(title).toBeDefined()
    expect(author).toBeDefined()
    expect(image).toBeDefined()
    expect(link).toBeDefined()
    expect(description).toBeDefined()
  })
})
