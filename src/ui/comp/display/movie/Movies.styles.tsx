import tw from 'twin.macro';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  ${tw`my-6`}
`;

export const MoviesTitle = styled.h3`
  ${tw`mx-8 text-2xl font-bold uppercase`}
`;

export const MoviesRow = styled.div`
  ${tw`flex p-4 mt-4 overflow-x-auto`}
  &::-webkit-scrollbar {
    dispay: none;
  }
`;

export const MoviesPoster = styled.img`
  ${tw`w-40 m-2 transition-all delay-200 hover:scale-110`}
`;
