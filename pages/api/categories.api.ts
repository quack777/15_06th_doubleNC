import fetch from 'isomorphic-unfetch';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import axios from 'axios';

// const API_URL = 'https://api2.ncnc.app/qa-types';

// export interface ContactsType {
//   id: number;
//   key: string;
//   name: string;
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {
//   const request = await fetch(`${API_URL}`);
//   const contact = await request.json();

//   return {  contact  };
// };

// export async function asdf({}) {
//   const request = await fetch(`${API_URL}`);
//   const response = await request.json();
//   const contact = response;

//   return { contact };
// }
export async function getStaticProps() {
  const { data } = await axios.get('https://api2.ncnc.app/qa-types');

  return {
    props: {
      data: data.qaTypes,
    },
  };
}
