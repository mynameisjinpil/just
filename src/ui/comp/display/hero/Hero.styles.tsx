import tw from 'twin.macro';
import styled from 'styled-components';

interface HeroContainerProps {
  background: string;
}

export const HeroContainer = styled.div`
  ${tw`p-8 h-[80vh]`}
  ${(props: HeroContainerProps) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
  background-size: cover !important
`;

export const HeroTitle = styled.h1`
  ${tw`mt-[40vh] mb-4 text-5xl font-bold`}
`;

export const HeroDescription = styled.p`
  ${tw`mb-4 text-lg font-medium w-[45rem] max-w-[80vw] leading-5`}
`;

export const HeroButton = styled.button`
  ${tw`cursor-pointer font-bold rounded px-8 py-2 mr-2 bg-[rgba(51, 51, 51, 0.5)] hover:bg-[#e6e6e6] text-white transition-all duration-200`}
`;
