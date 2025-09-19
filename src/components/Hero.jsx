import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = ({data}) => {
  // herodata 현재 활성 index;
  const [currentIndex, setCurrentIndex] = useState(0);

  const [textSwiper, setTextSwiper] = useState(null);
  const [imgSwiper, setImgSwiper] = useState(null);
  // .hero_title_slide 높이에 따라 부모 박스 높이 가변
  const textWrapRef = useRef(null);

  //활성 hero_title_slide 높이 설정
  useEffect(() => {
    const activeSlide = document.querySelector(
      ".swiper-slide-active .hero_title_slide"
    );
    const wrap = textWrapRef.current;

    if (activeSlide && wrap) {
      const height = activeSlide.getBoundingClientRect().height;
      wrap.style.height = `${height}px`;
    }
  }, [currentIndex]);

  //콘솔 디버깅 용
  useEffect(() => {
    if (textSwiper && imgSwiper) {
      textSwiper.controller.control = imgSwiper;
      imgSwiper.controller.control = textSwiper;

      window.textSwiper = textSwiper;
      window.imgSwiper = imgSwiper;
    }
  }, [textSwiper, imgSwiper]);

  return (
    <div className="hero">
      <div className="hero_slide_box">
        <div className="hero_slide">
          <div className="hero_slide_left">
            <div className="hero_sub_title">{data[currentIndex]?.sub}</div>

            {/* 텍스트 슬라이드 */}
            <Swiper
              direction="vertical"
              modules={[Controller, Autoplay]}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              onSwiper={setTextSwiper}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              className="hero_title_wrap"
              ref={textWrapRef}
            >
              {data.map((item) => (
                <SwiperSlide key={item.heroid} className="hero_title">
                  <Link
                    to={item.link}
                    className="hero_title_slide"
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 스와이퍼 밖 데이터 */}
            <div className="here_title_info">
              <div className="here_title_info_date">
                {data[currentIndex]?.date}
              </div>
              <div className="here_title_info_location">
                {data[currentIndex]?.location}
              </div>
            </div>
            <Link
              to={data[currentIndex]?.link}
              className="here_title_arrow"
              target="_blank"
            ></Link>
          </div>

          <div className="hero-wrap">
            <div className="hero_slide_right">
              {/* 이미지 슬라이드 */}
              <Swiper
                modules={[Controller, Pagination]}
                onSwiper={setImgSwiper}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                loop={true}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.heroid}>
                    <Link to={item.link} className="hero_slide_r_box">
                      <img
                        className="hero_slide_img"
                        src={item.img}
                        alt={`슬라이드 이미지 ${item.id}`}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 오른쪽 여백 바코드 영역 */}
            <div className="hero_slide_rightnull">
              <div className="hero_slide_rightnull_text">
                {data[currentIndex]?.category}
              </div>
              <span className="hero_slide_barcode"></span>
            </div>
          </div>
        </div>
      </div>

      {/* 커스텀 페이지네이션 */}
      <div className="custom-pagination-wrapper">
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

export default Hero;
