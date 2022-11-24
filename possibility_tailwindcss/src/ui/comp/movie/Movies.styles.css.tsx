import styled from 'styled-components';

export const MoviesContainer = styled.div`
  margin-top: 1.5rem;
  margin-bttom: 1.5rem;
`;

export const MoviesTitle = styled.h3`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MoviesRow = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    dispay: none;
  }
`;

export const MoviesPoster = styled.img`
  width: 10rem;
  margin: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  hover: {
    transform: scale(1.1);
  }
`;
