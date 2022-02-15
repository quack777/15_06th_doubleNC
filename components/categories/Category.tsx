import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ContextType {
  id: string;
  name: string;
  discountRate: number;
  imageUrl: string;
}

const Category: FC = () => {

  const [itemInfo, setItemInfo] = useState<ContextType[]>();

  const router = useRouter();

  useEffect(() => {
    if (router.query.sendData) {
      const categoryInfo: ContextType[] = JSON.parse(router.query.sendData);
      setItemInfo(categoryInfo);
    }
  }, [router.query.sendData]);


  const categoryButton = (id: string, name: string): void => {
    router.push({ pathname: `/categories/[id]`, query: { categoryName: name } }, `/categories/${id}`);
  };

  return (
    <TopCategories>
      <CategoriesBox>
        <div>
          {itemInfo?.map((item) => (
            <CategoryName
              key={item.id}
              active={item.id == router.query.id}
              onClick={() => categoryButton(item.id, item.name)}
            >
              {item.name}
            </CategoryName>
          ))}
        </div>
      </CategoriesBox>
    </TopCategories>
  );
};

const TopCategories = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 48rem;
  z-index: 10;
`;

const CategoriesBox = styled.div`
  display: flex;
  white-space: nowrap;
  width: 100%;
  height: 41px;
  background-color: #fff;
  font-size: 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    padding: 0px 10px;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    font-size: 16px;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CategoryName = styled.button<{ active?: boolean }>`
  padding: 10px 14px;
  height: 41px;
  border-bottom: 1px solid #ccc !important;
  border: none;
  background-color: #fff;
  color: #333;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.active && 'red'};
  border-bottom: ${(props) => props.active && '1px solid red !important'};
`;

export default Category;
