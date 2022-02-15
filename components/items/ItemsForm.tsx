import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import OptionBox from './OptionBox';
import Modal from '../common/Modal';
import { regExp } from '../../utils/regExp';
import type { ItemInfoType } from '../../pages/api/items.api';
import type { Option } from '../../pages/api/items.api';

interface ItemsFormProps {
  itemInfo: ItemInfoType;
}

interface ContainerStyleType {
  messageColumn: number | undefined;
}

interface OptionButtonStyleType {
  messageColumn: number | undefined;
  isShowing: boolean;
  selectedOption: Option | undefined;
}

interface SelectedOptionBoxStyleType {
  selectedOption: Option | undefined;
}

const ItemsForm: React.FC<ItemsFormProps> = ({ itemInfo }: ItemsFormProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [messageColumn, setMessageColumn] = useState<number | undefined>(0);
  const [options, setOptions] = useState<Option[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();

  const storeCheckedOption = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLLIElement;
    if (!target.id) return;
    const targetOption = options?.find((_, index) => String(index) === target.id);
    setSelectedOption(targetOption);
    setIsShowing(!isShowing);
  };

  const showModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsShowing(!isShowing);
  };

  const parseMessage = regExp(itemInfo.warning);

  useEffect(() => {
    if (itemInfo.warning) {
      const messageColumn = parseMessage && parseMessage[0].length + parseMessage[1].length + parseMessage[2].length;

      setMessageColumn(messageColumn);
    }
  }, [itemInfo.warning]);

  useEffect(() => {
    if (itemInfo.options) {
      setOptions(itemInfo.options);
    }
  }, [itemInfo.options]);

  return (
    <Container messageColumn={messageColumn}>
      <Modal isShowing={isShowing} hide={setIsShowing} />
      <ItemFrontInfoContainer>
        <ItemThumbnail>
          <img alt="item-img" className="item-img" src={itemInfo.imageUrl} />
        </ItemThumbnail>
        <ItemSubInfoContainer>
          <div className="brand">{itemInfo.brand}</div>
          <div className="product">{itemInfo.name}</div>
          <PriceViewContainer>
            <div className="price-info countRate">{`${itemInfo.discountRate}%`}</div>
            <div className="price-info countPrice">{`${itemInfo.minSellingPrice.toLocaleString('kw')}원`}</div>
            <div className="price-info originalPrice">{`${itemInfo.originalPrice.toLocaleString('kw')}원`}</div>
          </PriceViewContainer>
        </ItemSubInfoContainer>
      </ItemFrontInfoContainer>
      <ItemBottomInfoContainer>
        {parseMessage &&
          parseMessage.map((messages: string[], index) => {
            return (
              <NoteInfoContainer key={index}>
                <NoteInfoTitle>{messages[0]}</NoteInfoTitle>
                <NoteInfoList>
                  {messages.map((message: string, index) => {
                    if (index === 0) return;
                    return <NoteInfo key={index}>{message}</NoteInfo>;
                  })}
                </NoteInfoList>
              </NoteInfoContainer>
            );
          })}
      </ItemBottomInfoContainer>
      <SelectedOptionBox selectedOption={selectedOption}>
        <ViewBox>
          <Info>{`${selectedOption?.expireAt.toString().split('T')[0]} / ${selectedOption?.sellingPrice}`}</Info>
          <EditButton onClick={showModal} />
        </ViewBox>
      </SelectedOptionBox>
      <OptionButton
        isShowing={isShowing}
        onClick={showModal}
        messageColumn={messageColumn}
        selectedOption={selectedOption}
      >
        {isShowing ? '구매하기' : selectedOption ? '구매하기' : '옵션 선택하기'}
      </OptionButton>
      <OptionBox
        isShowing={isShowing}
        messageColumn={messageColumn}
        options={options}
        storeCheckedOption={storeCheckedOption}
      />
    </Container>
  );
};

const Container = styled.form<ContainerStyleType>`
  position: relative;
  max-height: 692.81px;
  background-color: #ffffff;
  overflow: ${({ messageColumn }) => (messageColumn && messageColumn > 12 ? 'scroll' : 'hidden')};
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
  background-color: #f1f3f4;

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
  ${({ theme }) => theme.flexMinin('row', '', 'center')};

  & .price-info {
    font-family: sans-serif;
  }

  & .countRate {
    margin-right: 9px;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    color: #ff5757;
  }

  & .countPrice {
    margin-right: 9px;
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
  }

  & .originalPrice {
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    text-decoration: line-through;
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

const SelectedOptionBox = styled.div<SelectedOptionBoxStyleType>`
  visibility: ${({ selectedOption }) => (selectedOption ? 'visible' : 'hidden')};
  margin-top: 40px;
  padding: 17px;
  border-top: 1px solid #f1f3f4;
  background-color: #ffffff;
`;

const ViewBox = styled.div`
  position: relative;
  ${({ theme }) => theme.flexMinin('row', 'space-between', 'center')};
  padding: 8px 17px;
  background-color: #f1f3f4;
  border-radius: 5px;
`;

const Info = styled.div`
  font-family: sans-serif;
  line-height: 17px;
`;

const EditButton = styled.button`
  width: 13px;
  height: 13px;
  border: none;
  background: url('/images/icon-edit_button.png') no-repeat;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
`;

const OptionButton = styled.button<OptionButtonStyleType>`
  position: relative;
  margin-top: ${({ messageColumn }) => (messageColumn && messageColumn > 12 ? '56px' : '89px')};
  padding: ${({ isShowing, selectedOption }) =>
    isShowing ? '23px 160px 40px 159px' : selectedOption ? '23px 160px 40px 159px' : '23px 142px 40px 142px'};
  border: none;
  background-color: ${({ isShowing }) => (isShowing ? '#CCCCCC' : '#FF5757')};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.2px;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;
`;

export default ItemsForm;
