import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
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
      <Nav showMenu={showMenu} SetShowMenu={SetShowMenu} />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default MainTemplate;
