import { Video } from '../../../../data/api/videoApi';
// eslint-disable-next-line object-curly-newline
import { MoviesContainer, MoviesTitle, MoviesRow, MoviesPoster } from './Movies.styles';

interface MoviesProps {
  title: string;
  movies: any;
}

export default function Movies({ title, movies }: MoviesProps) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((video: Video) => (
          <MoviesPoster
            key={video.id}
            src={`https://image.tmdb.org/t/p/w300${video.poster_path}`}
            alt={video.original_name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}
