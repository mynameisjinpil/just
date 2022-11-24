import { useEffect, useState } from 'react';
import { endPoints, getVideoList, Video } from '../../data/api/videoApi';
import Hero from '../comp/hero/Hero';
import Movies from '../comp/movie/Movies';
import Header from '../comp/navi/Header';

interface MainPageState {
  originals: Video[];
  trendings: Video[];
  nowPlaying: Video[];
  popular: Video[];
  topRated: Video[];
  upcoming: Video[];
}

export default function MainPage() {
  const [state, setState] = useState<MainPageState>({
    originals: [],
    trendings: [],
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    fetch();
  }, []);

  async function fetch(): Promise<void> {
    try {
      const originals = await getVideoList(endPoints.originals);
      const trendings = await getVideoList(endPoints.top_rated);
      const nowPlaying = await getVideoList(endPoints.now_playing);
      const popular = await getVideoList(endPoints.popular);
      const topRated = await getVideoList(endPoints.top_rated);
      const upcoming = await getVideoList(endPoints.upcoming);

      setState({
        originals,
        trendings,
        nowPlaying,
        popular,
        topRated,
        upcoming,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  return (
    <>
      <Header />
      <Hero movie={state.originals[Math.floor(Math.random() * state.originals.length)]} />
      <Movies title='Netflix originals' movies={state.originals} />
      <Movies title='Trending' movies={state.trendings} />
      <Movies title='Now Playing' movies={state.nowPlaying} />
      <Movies title='Popular' movies={state.popular} />
      <Movies title='Top Rated' movies={state.topRated} />
      <Movies title='Upcoming' movies={state.upcoming} />
    </>
  );
}
