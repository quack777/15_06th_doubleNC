import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Items: FC = () => {
  const [itemsInfo, setItemsInfo] = useState();

  useEffect(() => {
    const getApi = () => {
      axios.get('https://api2.ncnc.app/con-items/soon').then((res) => {
        console.log(res.data);
        setItemsInfo(res.data);
      });
    };
    getApi();
  }, []);
  return (
    <>
      <Header>
        <Alert>놓치지 마세요</Alert>
        <Title>오늘의 땡처리콘!</Title>
      </Header>
      <ItemsList>
        {itemsInfo?.conItems.map((data) => (
          <Link key={data.id} href={{ pathname: '/items/[id]' }} as={`/items/${data.id}`}>
            <ItemBox>
              <img src={data.imageUrl} alt="상품이미지" />
              <TextBox>
                <p>{data.conCategory2.name}</p>
                <p>{data.name}</p>
                <Price>
                  <p>{`${data.discountRate}%`}</p>
                  <p>{data.ncSellingPrice}</p>
                  <p>{data.originalPrice}</p>
                </Price>
              </TextBox>
            </ItemBox>
          </Link>
        ))}
      </ItemsList>
    </>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 29px;
  margin-bottom: 14px;
  margin-left: 17px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  & > p:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #808080;
  }
  & > p:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  & > p:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ff5757;
    margin-right: 9px;
  }
  & > p:nth-child(2) {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-right: 6px;
  }
  & > p:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-decoration-line: line-through;

    color: #808080;
  }
`;
const Alert = styled.p`
  margin: 0;
  color: #ff5757;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

const Title = styled.p`
  margin: 0;
  color: #000000;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const ItemsList = styled.section`
  width: 100%;
  background-color: aqua;
`;

const ItemBox = styled.div`
  display: flex;
  height: 107.62px;
  background: #ffffff;
  & > img {
    width: 70px;
    height: 70px;
  }
`;

export default Items;
