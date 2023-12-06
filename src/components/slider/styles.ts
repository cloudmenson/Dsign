import styled from "styled-components";

export const SwiperContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 170px;
  max-width: 1200px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50%;
  }
`;

export const SliderImage = styled.img`
  display: block;
  width: 120px;
  height: auto;
  object-fit: cover;
`;
