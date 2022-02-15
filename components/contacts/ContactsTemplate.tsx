import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const ContactsTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav name="고객센터" />
      {children}
    </Container>
  );
};

const Container = styled.div``;
export default ContactsTemplate;
