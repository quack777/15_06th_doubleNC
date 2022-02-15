import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface ButtonType {
  path: string;
}
interface NavProps {
  name?: string;
}
const Nav = ({ name }: NavProps) => {
  const router = useRouter();
  const path = router.asPath;

  const goToPath = () => {
    if (path === '/') {
      // router.push('')
    } else {
      router.back();
    }
  };
  return (
    <Container>
      <Image />
      <Button path={path} onClick={goToPath}>
        <div className="image" />
      </Button>
      <Title>{name}</Title>
    </Container>
  );
};

const Container = styled.nav`
  ${({ theme }) => theme.flexMinin('row', '', 'center')}
  height: ${({ theme }) => theme.height.nav};
  // margin-top: 20px;
  background-color: #ffffff;
`;
const Image = styled.div``;
const Button = styled.button<ButtonType>`
  magin: 3px;
  background: none;
  border: none;
  cursor: pointer;
  & .image {
    width: 30px;
    height: 30px;
    background-image: url(${({ theme, path }) =>
      path === '/' ? '/images/icon-menu.png' : '/images/icon-back_arrow.png'});
    background-repeat: no-repeat;
  }
`;
const Title = styled.div`
  margin-left: 130px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
`;

export default Nav;
