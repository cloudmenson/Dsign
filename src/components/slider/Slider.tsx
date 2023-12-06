import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import * as Styles from "./styles";
import { sliderData } from "./slider-data";

const Slider = () => {
  return (
    <Styles.SwiperContainer>
      <Swiper
        loop={true}
        speed={3000}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        {sliderData.map((sliderItem) => (
          <SwiperSlide key={sliderItem.id}>
            <Styles.SliderImage src={sliderItem.src} alt={sliderItem.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.SwiperContainer>
  );
};

export { Slider };
