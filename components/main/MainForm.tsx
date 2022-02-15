import React, { FC } from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Items from './Items';

const MainForm: FC = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Items />
    </>
  );
};

export default MainForm;
