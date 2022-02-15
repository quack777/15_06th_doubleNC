import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Link from 'next/link';
// import { ContactsType } from '../../pages/api/categories.api';

// interface MainContactsProps {
//   data: ContactsType[];
// }
// const API_URL = 'https://api2.ncnc.app/qa-types';

// export interface ContactsType {
//   id: number;
//   key: string;
//   name: string;
// }
// { data }: MainContactsProps
const ContactsForm = () => {
  return (
    <Container>
      <TopTextBox>
        <NavContainer>
          <NavBlinkBox />
          <p>고객센터</p>
          <Link href="/">
            <img src="/images/icon-close.png" alt="close" />
          </Link>
        </NavContainer>
        <TitleContainer>
          <div>상담시간 안내</div>
          <div>평일 10:00 - 18:00</div>
          <div>점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</div>
        </TitleContainer>
      </TopTextBox>

      <SelectContainer>
        <SelectTitle>자주 묻는 질문</SelectTitle>
        <Selecter>
          <div>구매</div>
          <div>판매</div>
        </Selecter>
      </SelectContainer>
      <QnAContainer>큐엔에이 딱</QnAContainer>
    </Container>
  );
};
// export async function getStaticProps() {
//   const request = await fetch(`${API_URL}`);
//   const contact = await request.json();

//   return { contact };
// }
// export async function getStaticProps() {
//   const { data } = await axios.get('https://api2.ncnc.app/qa-types');

//   return {
//     props: {
//       data: data.qaTypes,
//     },
//   };
// }
const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

const TopTextBox = styled.div`
  width: 100%;
  height: 284px;
  border: 1px solid black;
  margin-bottom: 9px;
  background-color: #ffffff;
`;

const NavContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between', 'center')}
  margin-top:10px;
  margin-bottom: 30px;
  & p {
    font-weight: 600;
    font-size: 15px;
  }
  & img {
    cursor: pointer;
  }
`;
const NavBlinkBox = styled.div``;

const TitleContainer = styled.div`
  ${({ theme }) => theme.flexMinin('column', '', 'flex-start')}
  height: 182px;
  margin-left: 17px;
  border: none;
  background-color: #ffffff;
  & :nth-child(1) {
    font-size: 15px;
    font-weight: 600;
  }
  & :nth-child(2) {
    margin-top: 7px;
    font-size: 14px;
    font-weight: 600;
  }
  & :nth-child(3) {
    margin-top: 3px;
    font-size: 14px;
    font-weight: 500;
    word-spacing: -6px;
    color: #808080;
  }
`;
const SelectContainer = styled.div`
  ${({ theme }) => theme.flexMinin('column', 'flex-end', 'flex-start')}
  height: 89px;
  background-color: #ffffff;
`;
const SelectTitle = styled.div`
  margin-left: 17px;
  font-weight: 600;
  font-size: 16px;
`;
const Selecter = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'center', 'center')};
  margin-top: 15px;
  margin-right: 17px;
  margin-left: 17px;
  & div {
    width: 170px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    cursor: pointer;
    color: #808080;
  }
  & div:hover {
    color: orange;
    border-bottom: 2px solid orange;
  }
`;
const QnAContainer = styled.div`
  margin-top: 10px;
  background-color: #ffffff;
`;
export default ContactsForm;
