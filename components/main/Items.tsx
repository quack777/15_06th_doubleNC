import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import moneyAddComma from '../utils/moneyAddComma';

interface ItemsType {
  id: number;
  name: string;
  originalPrice: number;
  count: number;
  imageUrl: string;
}

interface Contegory2Type {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: ItemsType[];
}

interface ItemInfo {
  askingPrice: number;
  conCategory2: Contegory2Type;
  conCategory2Id: number;
  count: number;
  createdAt: string;
  discountRate: number;
  id: number;
  imageUrl: string;
  info: null | undefined;
  information: null | undefined;
  isBlock: number;
  isOnlyAccount: number;
  isRefuse: number;
  minSellingPrice: number;
  name: string;
  ncSellingPrice: number;
  originalPrice: number;
  sfId: string;
  tip: null | undefined;
  warning: string;
}

const Items: FC = () => {
  const [itemsInfo, setItemsInfo] = useState<ItemInfo[]>(); // 일단 이거 type지정 나중으로 미루죠

  useEffect(() => {
    const itemGetInfo = () => {
      axios.get('https://api2.ncnc.app/con-items/soon').then((res) => {
        setItemsInfo(res.data.conItems);
        console.log(res.data.conItems); // type 지정 볼려고 작성한 console
      });
    };
    itemGetInfo();
  }, []);

  return (
    <>
      <Header>
        <Alert>놓치지 마세요</Alert>
        <Title>오늘의 땡처리콘!</Title>
      </Header>
      <ItemsList>
        {itemsInfo?.map((data) => (
          <Link key={data.id} href={{ pathname: '/items/[id]' }} as={`/items/${data.id}`} passHref>
            <ItemBox>
              <img src={data.imageUrl} alt="상품이미지" />
              <ItemInfo>
                <BrandName>{data.conCategory2.name}</BrandName>
                <ItemName>{data.name}</ItemName>
                <PriceInfo>
                  <Discount>{`${data.discountRate}%`}</Discount>
                  <SellPrice>{moneyAddComma(String(data.minSellingPrice))}</SellPrice>
                  <RealPrice>{moneyAddComma(String(data.originalPrice))}</RealPrice>
                </PriceInfo>
              </ItemInfo>
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

const Alert = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: #ff5757;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

const Title = styled.p`
  margin: 0;
  color: #000000;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const ItemsList = styled.section`
  width: 100%;
`;

const ItemBox = styled.div`
  display: flex;
  height: 107.62px;
  margin-bottom: 1px;
  padding-left: 19px;
  padding-top: 21px;
  background: #ffffff;
  cursor: pointer;
  & > img {
    width: 70px;
    height: 70px;
    margin-right: 17px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BrandName = styled.p`
  margin: 0;
  color: #808080;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

const ItemName = styled.p`
  margin: 0;
  margin-top: 7px;
  margin-bottom: 13px;
  color: #000000;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Discount = styled.p`
  margin: 0;
  margin-right: 9px;
  color: #ff5757;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const SellPrice = styled.p`
  margin: 0;
  margin-right: 6px;
  color: #000000;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const RealPrice = styled.p`
  margin: 0;
  color: #808080;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-decoration-line: line-through;
`;

export default Items;
