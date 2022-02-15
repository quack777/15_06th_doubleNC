import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import BottomNav from './BottomNav';
import List from './List';

const CategoriesTemplate: React.FC = ({ children }) => {
  const router = useRouter();
  console.log('categories router', router);
  return (
    <Container>
      <Nav name={router.query.categoryName} />
      <BottomNav />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default CategoriesTemplate;
