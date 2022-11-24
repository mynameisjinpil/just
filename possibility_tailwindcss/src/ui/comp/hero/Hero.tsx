import { Video } from '../../../data/api/videoApi';
// import { HeroButton, HeroContainer, HeroDescription, HeroTitle } from './Hero.styles';
import { HeroButton, HeroContainer, HeroDescription, HeroTitle } from './Hero.styles.css';

interface HeroProps {
  // eslint-disable-next-line react/require-default-props
  movie?: Video;
}

export default function Hero({ movie }: HeroProps) {
  if (!movie) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.original_name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}
