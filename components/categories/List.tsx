import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

const List: React.FC = () => {
  const [data, setData] = useState('');
  const router = useRouter();

  const getApi = () => {
    axios.get(`https://api2.ncnc.app/con-category1s/${router.query.id}/nested`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getApi();
  }, [router.query.id]);

  if (data.conCategory1) {
    console.log(data.conCategory1.conCategory2s);
    return (
      <Container>
        {data.conCategory1.conCategory2s.map((item: any) => (
          <BrandButton>
            <Link
              href={{ pathname: '/brands/[id]', query: { name: item.name, data: JSON.stringify(item.conItems) } }}
              as={`/brands/${item.id}`}
            >
              <a>
                <ImageBox id={item.id} src={item.imageUrl} />
                <TextBox id={item.id}>{item.name}</TextBox>
              </a>
            </Link>
          </BrandButton>
        ))}
      </Container>
    );
  } else {
    return null;
  }
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 341px;
  column-gap: 2px;
  row-gap: 2px;
  margin: 0 auto;
`;
const BrandButton = styled.div`
  ${({ theme }) => theme.flexMinin('column', 'center', 'center')}
  width: 112px;
  cursor: pointer;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  a {
    text-decoration: none;
  }
`;

const ImageBox = styled.img`
  width: 36px;
  height: 36px;
`;
const TextBox = styled.div`
  width: 95px;
  height: 13px;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  margin: 10px;
`;
export default List;
