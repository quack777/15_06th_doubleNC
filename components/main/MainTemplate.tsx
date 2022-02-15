import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import axios from 'axios';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import ContactsMenu from '../contacts/ContactsMenu';

interface PropsType {
  showMenu: boolean;
  SetShowMenu: boolean;
  childern: JSX.Element;
}

const MainTemplate = ({ showMenu, SetShowMenu, children }: PropsType) => {
  return (
    <Container>
      <ContactsMenu showMenu={showMenu} SetShowMenu={SetShowMenu} />
      <Nav name="니콘내콘" showMenu={showMenu} SetShowMenu={SetShowMenu} />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default MainTemplate;
