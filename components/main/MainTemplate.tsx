import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import ContactsMenu from '../contacts/ContactsMenu';

interface PropsType {
  showMenu: boolean;
  setShowMenu: any;
  childern?: React.ReactNode;
}

const MainTemplate: React.FC<PropsType> = ({ showMenu, setShowMenu, children }) => {
  return (
    <Container>
      <ContactsMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Nav name="니콘내콘" showMenu={showMenu} setShowMenu={setShowMenu} />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default MainTemplate;
