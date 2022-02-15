import React, { FC, useState } from 'react';
import styled from 'styled-components';

const images = [
  {
    id: 1,
    img: '/images/carousel1.jpg',
  },
  {
    id: 2,
    img: '/images/carousel2.jpg',
  },
  {
    id: 3,
    img: '/images/carousel3.jpg',
  },
];

const Carousel: FC = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div>
      <Container>
        {images.map((item, index) => (
          <div key={item.id}>{index === current && <img src={item.img} alt="slideImage" className="image" />}</div>
        ))}
      </Container>
      <ButtonHolder>
        {images.map((item) => (
          <SlideButton
            key={item.id}
            className={current === item.id - 1 ? 'active' : ''}
            onClick={() => setCurrent(item.id - 1)}
          >
            .
          </SlideButton>
        ))}
      </ButtonHolder>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 141px;
  }
`;

const SlideButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  left: 140px;
  bottom: 100px;
  padding: 0;
  z-index: 3;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  color: #ffffff;
`;
const ButtonHolder = styled.div`
  .active {
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    color: #000000;
  }
`;
export default Carousel;
