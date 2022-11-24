import axios from 'axios';

export const baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = 'eb6336f2b7ee9d85c9bd48f9f8955022';

export const endPoints = {
  originals: '/discover/tv',
  trending: '/trending/all/week',
  now_playing: '/movie/now_playing',
  popular: '/movie/popular',
  top_rated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
};

export interface Video {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_languages: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export async function getVideoList(at: string): Promise<Video[]> {
  const { data } = await axios.get(`${baseURL}${at}`, {
    params: { api_key: API_KEY },
  });
  return data.results;
}
