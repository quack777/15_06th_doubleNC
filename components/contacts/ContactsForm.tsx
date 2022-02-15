import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getContactData, getContactQnA } from '../../pages/api/contacts.api';
import { redirect } from 'next/dist/server/api-utils';

const ContactsForm = () => {
  const [qatypeData, setQatypeData] = useState<string>('');
  const [qnAdata, setQnAData] = useState<string>('');
  const [idNumber, setIdNumber] = useState<number>(1);
  const [targetNum, setTargetNum] = useState();

  useEffect(() => {
    const getApi = async () => {
      const { data } = await getContactData();
      setQatypeData(data.qaTypes);
    };
    getApi();
  }, []);

  useEffect(() => {
    if (!qatypeData) return;
    const getQnAApi = async () => {
      const { data } = await getContactQnA([idNumber]);
      setQnAData(data.qas);
    };
    getQnAApi();
  }, [qatypeData, idNumber]);

  console.log(qnAdata);
  console.log(targetNum);

  if (qnAdata) {
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
            <SelecterPurchase
              idNumber={idNumber}
              id={qatypeData[0].id}
              onClick={() => {
                setIdNumber(1);
              }}
            >
              {qatypeData[0].name}
            </SelecterPurchase>
            <SelecterSell
              idNumber={idNumber}
              id={qatypeData[1].id}
              onClick={() => {
                setIdNumber(2);
              }}
            >
              {qatypeData[1].name}
            </SelecterSell>
          </Selecter>
        </SelectContainer>
        <QnAContainer>
          {qnAdata.map((app: string) => {
            return (
              <>
                <QnAQuestion
                  onClick={() => {
                    setTargetNum(app.id);
                  }}
                >
                  <span>Q.</span>
                  <span>{app.question}</span>
                  <span>
                    <img src="/images/icon-down-arrow.png" />
                  </span>
                </QnAQuestion>
                {targetNum == app.id ? <QnAAnswer>{app.answer}</QnAAnswer> : null}
              </>
            );
          })}
        </QnAContainer>
      </Container>
    );
  } else return null;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

const TopTextBox = styled.div`
  width: 100%;
  height: 284px;
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
  }
  & div:hover {
    color: #ff5757;
    border-bottom: 2px solid #ff5757;
  }
`;
const SelecterPurchase = styled.div`
  color: ${(props) => (props.idNumber === 1 ? '#FF5757' : '#808080')};
  border-bottom: ${(props) => (props.idNumber === 1 ? '2px' : '0px')} solid
    ${(props) => (props.idNumber === 1 ? '#FF5757' : '#808080')};
`;
const SelecterSell = styled.div`
  color: ${(props) => (props.idNumber === 2 ? '#FF5757' : '#808080')};
  border-bottom: ${(props) => (props.idNumber === 2 ? '2px' : '0px')} solid
    ${(props) => (props.idNumber === 2 ? '#FF5757' : '#808080')};
`;
const QnAContainer = styled.div`
  margin-top: 10px;
  background-color: #ffffff;
`;
const QnAQuestion = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'flex-start', 'center')};
  height: 50px;
  font-weight: 600;
  font-size: 15px;
  word-spacing: -4px;
  cursor: pointer;
  & :nth-child(1) {
    flex: 1;
    font-weight: 600;
    color: #ff5757;
  }
  & :nth-child(2) {
    flex: 10;
    text-align: left;
  }
  & :nth-child(3) {
    flex: 1;
  }
`;
const QnAAnswer = styled.div`
  padding: 17px;
  font-size: 15px;
  word-spacing: -4px;
  text-align: left;
  background-color: ${({ theme }) => theme.color.background};
`;
// &.${(props) => props.test} {
//   ${(props) =>
//     props.test == 55
//       ? css`
//           display: none;
//         `
//       : css`
//           display: block;
//         `}
// }

export default ContactsForm;
