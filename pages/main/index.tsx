import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';
import MainTemplate from '../../components/main/MainTemplate';
import MainForm from '../../components/main/MainForm';

function Main() {
  const [showMenu, SetShowMenu] = useState<boolean>(false);
  return (
    <MainTemplate showMenu={showMenu} SetShowMenu={SetShowMenu}>
      <MainForm />
    </MainTemplate>
  );
}

const Test = styled.div``;
export default Main;
