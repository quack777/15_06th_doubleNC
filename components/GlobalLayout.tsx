import React from 'react';
import styled from 'styled-components';
import Nav from './nav/Nav';

const GlobalLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.basicWidth};
  // max-height: ${({ theme }) => theme.height.content};
  height: 60vh;
  overflow-y: scroll;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ theme }) => theme.color.background};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalLayout;
