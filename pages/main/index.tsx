import React, { useState } from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainForm from '../../components/main/MainForm';
import { NextPage } from 'next';

const Main: NextPage = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <MainTemplate showMenu={showMenu} setShowMenu={setShowMenu}>
      <MainForm />
    </MainTemplate>
  );
};

export default Main;
