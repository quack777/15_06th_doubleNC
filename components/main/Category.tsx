import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

const Category: FC = ({ data }) => {
  console.log(data);
  // 일단 test => aixos useEffect 사용
  // categories 페이지에 사용할 categories.name값 전달
  const [apiData, setApiData] = useState([]);
  const [sendData, setSendData] = useState();

  interface ContextType {
    id: string;
    name: string;
    discountRate: number;
    imageUrl: string;
  }

  const testGetAPi = () => {
    axios.get('https://api2.ncnc.app/con-category1s').then((res) => {
      setApiData(res.data.conCategory1s);
    });
  };
  useEffect(() => {
    testGetAPi();
  }, []);

  useEffect(() => {
    setSendData(apiData.map((data) => data.name));
  }, [apiData]);

  return (
    <div className="Category">
      <p>test router with data</p>
      <Link href={{ pathname: '/brands/[id]', query: { sendData } }} as="/brands/67">
        <button>까페</button>
      </Link>
    </div>
  );
};

/* Category.getInitialProps = async () => {
  try {
    const res = await axios.get('https://api2.ncnc.app/con-category1s');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
}; */

/* export async function getStaticProps() {
  const { data } = await axios.get('https://api2.ncnc.app/con-category1s');

  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
} */
export default Category;
