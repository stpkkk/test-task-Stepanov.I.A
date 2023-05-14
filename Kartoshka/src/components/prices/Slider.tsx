import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ImagePaths } from './ImagePaths';
import { getSliderData } from '../../data';
import 'swiper/swiper.min.css';
import { ArrowRight, ArrowLeft } from '../../assets/icons';
import { useMobile } from '../../hooks';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

export const Slider: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();
  const isMobile = useMobile();

  return (
    <section
      className="w-full min-h-[851px] sm:min-h-[551px]   pt-[105px] sm:pt-[50px] "
      id="prices"
    >
      <div className="relative max-w-[760px] w-full mx-auto">
        <div className="flex_center">
          <h2 className="subtitle mb-[81px] sm:mb-[40px]">Цены</h2>
        </div>
        <Swiper
          slidesPerView={1}
          loop
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          pagination={isMobile ? { clickable: true } : false}
        >
          {getSliderData.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="flex_center flex-col">
                <img
                  src={ImagePaths[slide.image]}
                  alt="slide"
                  className="mb-[33px] sm:mb-[19px] sm:w-[286px] sm:h-[190px]"
                  width={412}
                  height={254}
                />
                <div className="font-medium text-lightGray text-[30px] sm:text-[20px] leading-[37px] sm:leading-[24px] text-center mb-[9px] sm:mb-[8px]">
                  {slide.title}
                </div>
                <p className="text-potato sm:text-[50px] sm:leading-[61px] text-[70px] leading-[85px] text-center font-light sm:pb-[43px]">
                  {slide.price} ₽
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isMobile || (
          <div className="absolute top-1/2 left-4 z-10">
            <button
              className="swiper-button-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </button>
          </div>
        )}
        {isMobile || (
          <div className="absolute top-1/2 right-4 z-10">
            <button
              className="swiper-button-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
