import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Pagination } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// ===== 타입 정의 =====
interface HeroItem {
  heroid: string | number;
  sub: string;
  title: string;
  link: string;
  date: string;
  location: string;
  img: string;
  category: string;
}

interface HeroProps {
  data: HeroItem[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  // 현재 활성 index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Swiper 인스턴스
  const [textSwiper, setTextSwiper] = useState<SwiperCore | null>(null);
  const [imgSwiper, setImgSwiper] = useState<SwiperCore | null>(null);

  // 텍스트 래퍼 Ref
  const textWrapRef = useRef<HTMLDivElement | null>(null);

  // 활성 hero_title_slide 높이 설정
  useEffect(() => {
    const activeSlide = document.querySelector(
      ".swiper-slide-active .hero_title_slide"
    ) as HTMLElement | null;

    const wrap = textWrapRef.current;

    if (activeSlide && wrap) {
      const height = activeSlide.getBoundingClientRect().height;
      wrap.style.height = `${height}px`;
    }
  }, [currentIndex]);

  // 양방향 컨트롤 연결
  useEffect(() => {
    if (textSwiper && imgSwiper) {
      textSwiper.controller.control = imgSwiper;
      imgSwiper.controller.control = textSwiper;

      // 디버깅용
      (window as any).textSwiper = textSwiper;
      (window as any).imgSwiper = imgSwiper;
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
              autoplay={{ delay: 4000 }}
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
                    rel="noreferrer"
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
              to={data[currentIndex]?.link || "#"}
              className="here_title_arrow"
              target="_blank"
              rel="noreferrer"
            />
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
                    <Link
                      to={item.link}
                      className="hero_slide_r_box"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="hero_slide_img"
                        src={item.img}
                        alt={`슬라이드 이미지 ${item.heroid}`}
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
