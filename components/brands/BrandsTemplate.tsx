import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const BrandsTemplate: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <Container>
      <Nav name={router.query.name} />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default BrandsTemplate;
