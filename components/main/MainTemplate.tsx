import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import ContactsMenu from '../contacts/ContactsMenu';

interface PropsType {
  showMenu: boolean;
  SetShowMenu: boolean;
  childern?: React.ReactNode;
}

const MainTemplate: React.FC<PropsType> = ({ showMenu, SetShowMenu, children }) => {
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
