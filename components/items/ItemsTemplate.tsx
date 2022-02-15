import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const ItemsTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav name=""/>
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default ItemsTemplate;
