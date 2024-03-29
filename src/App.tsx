import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PodcasterPage from './pages/PodcasterPage';
import PodcastPage from './pages/PodcastPage';
import NavBar from './components/navbar/NavBar';
import EpisodePage from './pages/EpisodePage';
import { store } from './store/store';
import { Provider } from 'react-redux'

function App() {

  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <section>
            <NavBar/>
            <main>
                <Routes>
                  <Route path="/" element={<PodcasterPage/>}></Route>
                  <Route path="/podcast/:podcastId" element={<PodcastPage/>}></Route>
                  <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePage/>}></Route>
                </Routes>
            </main>
          </section>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
