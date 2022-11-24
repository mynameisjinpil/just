import styled from 'styled-components';

interface HeroContainerProps {
  background: string;
}

export const HeroContainer = styled.div`
  padding: 2rem;
  height: 80vh;
  ${(props: HeroContainerProps) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
  background-size: cover !important
`;

export const HeroTitle = styled.h1`
  margin-top: 40vh;
  margin-bottom: 1rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
`;

export const HeroDescription = styled.p`
  width: 45rem;
  max-width: 80vw
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 500;
  leading: 1.25rem;
`;

export const HeroButton = styled.button`
  curso: pointer;
  font-weight: 700;
  border-radius: 0.25rem;
  padding-left: 2rem /** 32px */;
  padding-right: 2rem /** 32px */;
  padding-top: 0.5rem /** 32px */;
  padding-bottom: 0.5rem /** 32px */;
  margin-right: 0.5rem;
  background: rgba(51, 51, 51, 0.5);
  &:hover: {
    background-color: rgb(230 230 230 / var(--tw-bg-opacity));
  }
  margin-top: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
