import React from 'react';
import styled, { css } from 'styled-components';
import { Option } from '../../pages/api/items.api';

interface OptionBoxTypeProps {
    isShowing: boolean
    messageColumn: number | undefined
    options: Option[] | null
    storeCheckedOption: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

interface ContainerTypeStyle {
    isShowing: boolean
    messageColumn: number | undefined
}

const OptionBox: React.FC<OptionBoxTypeProps> = ({isShowing, messageColumn, options, storeCheckedOption}: OptionBoxTypeProps) => {
    
    return (
        <Container isShowing={isShowing} messageColumn={messageColumn}>
        <Guide>옵션 선택하기</Guide>
        <OptionList>
          {
            options && options.map((option: Option, index) => {
              return(
                <Option id={String(index)} key={index} onClick={(e) => storeCheckedOption(e)}>
                <InfoContainer>
                <Info>
                  <span className="name">유효기간</span>
                  <span className="name">할인가</span>
                </Info>
                <Info>
                  <span className="content">{option.expireAt.toString().split('T')[0]} 까지</span>
                  <span className="content">{option.sellingPrice}</span>
                </Info>
                </InfoContainer>
              <DiscountRate>{option.count}%</DiscountRate>
              </Option>
              )
            }) 
          }
        </OptionList>
      </Container>
    )
}

const Container = styled.div<ContainerTypeStyle>`
    position: absolute;
    bottom: -50px;
    width: 375px;
    visibility: hidden; 
    background-color: #ffffff;
    text-align: start;
    cursor: pointer;
    z-index: 1000;
    transform: translateY(0);
    transition: 0.15s ease-in-out;

    ${({isShowing, messageColumn}) => isShowing && css`
        transform: ${messageColumn && messageColumn > 12 ? 'translateY(-3px)' : 'translateY(-120px)'};
        visibility: visible;
    `}
`;

const Guide = styled.div`
   padding: 16px 0 16px 17px;
   background-color: #F1F3F4;
   font-size: 14px;
   font-weight: 500;
   line-height: 17px;
   letter-spacing: -1px;
`;

const OptionList = styled.ul`
    max-height: 195px;
    padding: 0;
    list-style: none;
    overflow: scroll;
    &::-webkit-scrollbar {
       display: none;
   }
`;

const Option = styled.li`
    ${({theme}) => theme.flexMinin('row', 'space-between', 'center')};
    padding: 10px 17px;
    border-bottom: 2px solid #eee;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;

    & span {
        font-family: sans-serif;
    }

    & .name {
        margin-right: 9px;
        font-size: 12px;
        line-height: 20px;
        color: #808080
    }   

    & .content {
        font-size: 16px;
        line-height: 19px;
    }
`;

const DiscountRate = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: #FF5757;
`;

export default OptionBox;