import Link from 'next/link';
import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Nav from '../nav/Nav';

interface PropsType {
  showMenu: boolean;
  SetShowMenu: boolean;
}

const ContactsMenu = ({ showMenu, SetShowMenu }: PropsType) => {
  return (
    <Container showMenu={showMenu}>
      <TopBlink />
      <Nav name="마이페이지" showMenu={showMenu} SetShowMenu={SetShowMenu} />
      <Link href="/contacts">
        <Contacts>
          <p>고객센터</p>
          <p>
            <img src="/images/icon-after_arrow.png" />
          </p>
        </Contacts>
      </Link>
      <BlinkBox />
    </Container>
  );
};
const TopBlink = styled.div`
  height: 20px;

  background-color: #ffffff;
`;

const Container = styled.div<{ showMenu: boolean }>`
  display: ${(props) => (props.showMenu ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.basicWidth};
  height: ${({ theme }) => theme.height.content};
  margin: 0 auto;
  margin-top: -20px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 4;
`;
// ${(props) =>
//     props.showMenu
//       ? css`
//           transform: translateX(0vw);
//         `
//       : css`
//           transform: translateX(-100vw);
//         `}
//   transition: all 2s;

const Contacts = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between', 'center')}
  width: 100%;
  margin: 10px 0px;
  background-color: #ffffff;
  cursor: pointer;
  & p {
    margin-left: 10px;
    margin-right: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
  }
`;
const BlinkBox = styled.div`
  height: 1400px;
  background-color: #ffffff;
`;

export default ContactsMenu;
