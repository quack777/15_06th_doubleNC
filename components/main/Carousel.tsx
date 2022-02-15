import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Carousel: FC = () => {
  const [current, setCurrent] = useState<number>(0);
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
  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div>
      <Container>
        {images.map((item, index) => (
          <div>{index === current && <img src={item.img} className="image" />}</div>
        ))}
      </Container>
      <ButtonHolder>
        {images.map((item) => (
          <SlideButton className={current === item.id - 1 && 'active'} onClick={() => setCurrent(item.id - 1)}>
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
  width:100%;
  img {
    width: 100%;
    height: 141px;
  }
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
