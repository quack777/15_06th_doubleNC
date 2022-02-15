import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';
import MainTemplate from '../../components/main/MainTemplate';
import MainForm from '../../components/main/MainForm';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { NextPage } from 'next';

const Main: NextPage<{ results: any }> = ({ results }) => {
  return (
    <MainTemplate>
      <MainForm />
      main{JSON.stringify(results)}
    </MainTemplate>
  );
};

const Test = styled.div``;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get('https://api2.ncnc.app/con-category1s');

  return {
    props: {
      results: res.data,
    },
  };
};

export default Main;
