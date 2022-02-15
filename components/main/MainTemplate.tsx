import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import axios from 'axios';
import { GetStaticProps, GetStaticPropsResult } from 'next';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav name="니콘내콘" />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default MainTemplate;
