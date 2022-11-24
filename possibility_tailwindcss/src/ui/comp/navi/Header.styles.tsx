import styled from 'styled-components';
import tw from 'twin.macro';

interface HeaderContainerProps {
  isDark: boolean;
}

export const HeaderContainer = styled.div`
  ${tw`fixed top-0 z-10 flex justify-between w-full p-4 transition-all `}
  ${(props: HeaderContainerProps) => (props.isDark ? tw`bg-black` : tw`bg-transparent`)}
  img {
    ${tw`h-8`}
  }
`;
