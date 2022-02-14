import React from 'react';
import styled from 'styled-components';
import Nav from './nav/Nav';

const GlobalLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: ${({ theme }) => theme.basicWidth};
  max-height: ${({ theme }) => theme.height.content};
  margin: 0 auto;
  text-align: center;
  background-color: ${({ theme }) => theme.color.background};
`;

export default GlobalLayout;
