import React from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Items from './Items';

const MainForm: React.FC = ({ data }) => {
  console.log(data);
  return (
    <>
      <Carousel />
      <Category />
      <Items />
    </>
  );
};

export default MainForm;
