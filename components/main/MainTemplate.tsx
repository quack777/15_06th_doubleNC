import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default MainTemplate;
