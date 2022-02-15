import type { NextPage } from 'next';
import Main from './main';
import axios from 'axios';
import { GetStaticProps } from 'next';

const Home: NextPage<{ results: any }> = ({ results }) => {
  console.log('>>', results, '<<');
  return <Main />;
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get('https://api2.ncnc.app/con-category1s');

  return {
    props: {
      results: res.data,
    },
  };
};
export default Home;
