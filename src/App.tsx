import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PodcasterPage from './pages/PodcasterPage'
import NavBar from './components/navbar/NavBar'
import Podcast from './components/podcast/Podcast'
import PodcastLayout from './pages/PodcastLayout'
import Episode from './components/episode/Episode'

function App() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <section>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<PodcasterPage />}></Route>
              <Route path="/podcast/:podcastId" element={<PodcastLayout />}>
                <Route index element={<Podcast />} />
                <Route path="episode/:episodeId" element={<Episode />} />
              </Route>
            </Routes>
          </main>
        </section>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
