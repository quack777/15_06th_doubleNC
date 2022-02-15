import React from 'react';
import styled, { css } from 'styled-components';

interface OptionBoxTypeProps {
    isShowing: boolean
}

interface ContainerTypeStyle {
    isShowing: boolean
}

const OptionBox: React.FC<OptionBoxTypeProps> = ({isShowing}: OptionBoxTypeProps) => {
    
    return (
        <Container isShowing={isShowing}>
        <Guide>옵션 선택하기</Guide>
        <OptionList>
          <Option>
            <InfoContainer>
            <Info>
              <span className="name">유효기간</span>
              <span className="name">할인가</span>
            </Info>
            <Info>
              <span className="content">2021.08.06 까지</span>
              <span className="content">3250원</span>
            </Info>
            </InfoContainer>
          <DiscountRate>14%</DiscountRate>
          </Option>
          <Option>
            <InfoContainer>
            <Info>
              <span className="name">유효기간</span>
              <span className="name">할인가</span>
            </Info>
            <Info>
              <span className="content">2021.08.06 까지</span>
              <span className="content">3250원</span>
            </Info>
            </InfoContainer>
          <DiscountRate>14%</DiscountRate>
          </Option>
          <Option>
            <InfoContainer>
            <Info>
              <span className="name">유효기간</span>
              <span className="name">할인가</span>
            </Info>
            <Info>
              <span className="content">2021.08.06 까지</span>
              <span className="content">3250원</span>
            </Info>
            </InfoContainer>
          <DiscountRate>14%</DiscountRate>
          </Option>
          <Option>
            <InfoContainer>
            <Info>
              <span className="name">유효기간</span>
              <span className="name">할인가</span>
            </Info>
            <Info>
              <span className="content">2021.08.06 까지</span>
              <span className="content">3250원</span>
            </Info>
            </InfoContainer>
          <DiscountRate>14%</DiscountRate>
          </Option>
        </OptionList>
      </Container>
    )
}

const Container = styled.div<ContainerTypeStyle>`
    position: relative;
    visibility: hidden; 
    background-color: #ffffff;
    text-align: start;
    cursor: pointer;
    z-index: 1000;
    transform: translateY(0);
    transition: 0.25s ease-in-out;

    ${({isShowing}) => isShowing && css`
        transform: translateY(-334px);
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