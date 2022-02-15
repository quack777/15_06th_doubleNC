import axios from 'axios';
import React from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Items from './Items';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

const MainForm: React.FC = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Items />
    </>
  );
};

export default MainForm;
