import React, { useState } from 'react';
import styled from 'styled-components';
import OptionBox from './OptionBox';
import Modal from '../common/Modal';
import type { ItemInfoType } from '../../pages/api/items.api';

interface ItemsFormProps {
  itemInfo: ItemInfoType;
}

const ItemsForm: React.FC<ItemsFormProps> = ({itemInfo}: ItemsFormProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  
  const showModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsShowing(!isShowing);
  }

  return (
    <Container>
      <Modal isShowing={isShowing} hide={setIsShowing}/>
      <ItemFrontInfoContainer>
        <ItemThumbnail>
          <img alt="item-img" className="item-img" src='/images/item-thumbnail.jpg'/>
        </ItemThumbnail>
        <ItemSubInfoContainer>
          <div className="brand">{itemInfo.}</div>
          <div className="product">상품명</div>
          <PriceViewContainer>
            <div className="price-info countRate">00%</div>
            <div className="price-info countPrice">000,000원</div>
            <div className="price-info originalPrice">000,000원</div>
          </PriceViewContainer>
        </ItemSubInfoContainer>
      </ItemFrontInfoContainer>
      <ItemBottomInfoContainer>
        <NoteInfoContainer>
        <NoteInfoTitle>유의사항</NoteInfoTitle>
        <NoteInfoList>
            <NoteInfo>쿠폰 사용처에서 유효기간 내에 사용이 가능합니다.</NoteInfo>
            <NoteInfo>포인트 적립 및 제휴카드 할인 등은 교환처의 정책에 따릅니다.</NoteInfo>
            <NoteInfo>바코드 인식이 안될 경우, 바코드 번호를 입력하여 결제 할 수 있습니다.</NoteInfo>
        </NoteInfoList>
        </NoteInfoContainer>
        <NoteInfoContainer>
        <NoteInfoTitle>환불규정</NoteInfoTitle>
        <NoteInfoList>
            <NoteInfo>니콘내콘에서 판매되는 쿠폰은 개인 간 거래를 통해 리셀링되는 상품으로 환불 및 유효기간 연장이 불가합니다.</NoteInfo>
            <NoteInfo>쿠폰 사용이 불가할 경우, 카카오톡 플러스친구 @니콘내콘으로 문의해주시기 바랍니다.</NoteInfo>
        </NoteInfoList>
        </NoteInfoContainer>
      </ItemBottomInfoContainer>
      <OptionButton onClick={showModal}>옵션 선택하기</OptionButton>
     <OptionBox isShowing={isShowing}/>
  </Container>
  )
};

const Container = styled.form`
  position: relative;
  max-height: 692.81px;
  background-color: #ffffff;
  overflow: hidden;
`;

const ItemFrontInfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 17px;
  border-top: 2px solid #eee;
  background-color: #ffffff;
  z-index: 1001;
`;

const ItemThumbnail = styled.figure`
  margin: 0;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #F1F3F4;

  & .item-img {
    max-width: 70px;
    max-height: 70px;
  }
`;

const ItemSubInfoContainer = styled.div`
  margin-left: 17px;
  text-align: start;

  & p {
    margin: 0;
  }

  & .brand {
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    color: #808080;
  }
  & .product {
    margin-bottom: 13px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    color: #000000;
  }
`;

const PriceViewContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between', 'center')};
  min-width: 206px;

  & .price-info {
    font-family: sans-serif;
  }

  & .countRate {
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    color: #FF5757;
  }

  & .countPrice {
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
  }

  & .originalPrice {
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    text-decoration : line-through;
  }
`;

const ItemBottomInfoContainer = styled.div`
  margin: 18px 17px 0 17px;
  text-align: start;
`;

const NoteInfoContainer = styled.div`
  margin-bottom: 18.33px;
`;

const NoteInfoTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
`;

const NoteInfoList = styled.ul`
  margin-top: 9.7px;
  margin-bottom: 0;
  padding-left: 17px;
`;

const NoteInfo = styled.li`
  margin-bottom: 4.31px;
  
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -1px;
  color: #808080;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OptionButton = styled.button`
  position: relative;
  margin-top: 219.73px;
  padding: 23px 142px 40px 142px;
  border: none;
  background-color: #FF5757;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.2px;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;
`;

export default ItemsForm;
