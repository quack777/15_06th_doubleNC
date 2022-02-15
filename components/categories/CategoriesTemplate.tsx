import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import BottomNav from './BottomNav';
import List from './List';

const CategoriesTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      <BottomNav />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default CategoriesTemplate;
