import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ContextType {
  id: string;
  name: string;
  discountRate: number;
  imageUrl: string;
}

const Category: FC = () => {
  const [categoryInfo, setCategoryInfo] = useState<ContextType[] | undefined>();

  useEffect(() => {
    const CategoryGetInfo = () => {
      axios.get('https://api2.ncnc.app/con-category1s').then((res) => {
        setCategoryInfo(res.data.conCategory1s);
      });
    };
    CategoryGetInfo();
  }, []);

  return (
    <CategoryGrid>
      {categoryInfo?.map((data: ContextType) => (
        <Link
          key={data.id}
          href={{
            pathname: `/categories/[id]`,
            query: { sendData: JSON.stringify(categoryInfo), categoryName: data.name },
          }}
          as={`/categories/${data.id}`}
          passHref
        >
          <DataBox>
            <img src={data.imageUrl} alt="img정보" />
            <p>{data.name}</p>
          </DataBox>
        </Link>
      ))}
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
  margin-top: -80px;
  cursor: pointer;
`;

const DataBox = styled.div`
  width: 112px;
  height: 94px;
  padding-top: 11px;
  padding-bottom: 12.95px;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;

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
