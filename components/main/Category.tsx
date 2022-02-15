import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import styled from 'styled-components';

interface ContextType {
  id: string;
  name: string;
  discountRate: number;
  imageUrl: string;
}

const Category: FC = ({ data }) => {
  // 일단 test => aixos useEffect 사용
  // categories 페이지에 사용할 categories.name값 전달
  const [apiData, setApiData] = useState<ContextType[]>();
  const [sendData, setSendData] = useState<string[]>();

  const testGetAPi = () => {
    axios.get('https://api2.ncnc.app/con-category1s').then((res) => {
      setApiData(res.data.conCategory1s);
    });
  };
  useEffect(() => {
    testGetAPi();
  }, []);

  useEffect(() => {
    setSendData(apiData?.map((data) => data.name));
  }, [apiData]);

  return (
    <CategoryGrid>
      {apiData?.map((data: ContextType) => (
        <Link
          key={data.id}
          href={{ pathname: `/categories/[id]`, query: { sendData: JSON.stringify(apiData) } }}
          as={`/categories/${data.id}`}
        >
          <DataBox>
            <img src={data.imageUrl} alt="img정보" />
            <p>{data.name}</p>
          </DataBox>
        </Link>
      ))}
      {/* <Link href={{ pathname: '/categories/[id]', query: { sendData } }} as="/categories/67">
        <a>까페</a>
      </Link> */}
    </CategoryGrid>
  );
};

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 2px;
  row-gap: 1.9px;
  width: 341px;
  height: 285px;
  margin: 0 auto;
`;

const DataBox = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 112px;
  height: 94px;
  padding-top: 11px;
  padding-bottom: 12.95px;
  background: #ffffff;
  border-radius: 5px;
  & > img {
    width: 43px;
    height: 43px;
  }
  & > p {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
`;

export default Category;
