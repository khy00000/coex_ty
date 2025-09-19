import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FadeInGSAP from "../hooks/FadeInGSAP";

const Ticket = ({data}) => {
  //부킹 티켓 임의 반복
  const refeatbooking = [...data, ...data];

  //불릿 두개
  const handleSlideChange = (swiper) => {
    const bullets = document.querySelectorAll(
      ".ticket_pagination .swiper-pagination-bullet"
    );
    bullets.forEach((b) =>
      b.classList.remove("swiper-pagination-bullet-active")
    );

    // realIndex를 무조건 0 or 1
    const bulletIndex = swiper.realIndex % 2;
    if (bullets[bulletIndex]) {
      bullets[bulletIndex].classList.add("swiper-pagination-bullet-active");
    }
  };
  
  return (
    <div className="main_ticket">
      <div className="main_ticket_wrap">
        <FadeInGSAP delay={0.6}>
          <div className="center-wrap">
            <h3>
              <span className="ticket_title">티켓 오픈</span>
              <span className="ticket_title_num">{data.length}</span>
            </h3>
          </div>
        </FadeInGSAP>

        <div className="ticket_con">
          <div className="ticket_navi">
            <div className="ticket_navi_wrap">
              <button
                className="ticket_prev"
                aria-label="이전 슬라이드"
              ></button>
              <button
                className="ticket_next"
                aria-label="다음 슬라이드"
              ></button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              el: ".ticket_pagination",
              clickable: true,
            }}
            navigation={{ nextEl: ".ticket_next", prevEl: ".ticket_prev" }}
            loop={true}
            slidesPerView="auto"
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            className="ticket_swiper"
          >
            {refeatbooking.map((item, index) => (
              <SwiperSlide className="ticket_con_wrap" key={index}>
                <div className="ticket_wrapper">
                  <div className="ticket_left">
                    <span className="left_bg" />
                  </div>
                  {/* 티켓 정보 영역 */}
                  <div className="ticket_center_wrap">
                    <div className="ticket_center">
                      <div className="center_img">
                        <img
                          src={item.img}
                          alt={`티켓 리스트 이미지 ${item.id}`}
                        />
                      </div>
                      {/* 티켓 정보 오른쪽 영역 */}
                      <div className="center_right">
                        <div className="center_right_title">{item.title}</div>
                        <div className="center_right_list">
                          <div className="list_info">
                            <div className="list_info_title">행사 개최</div>
                            <div className="list_info_Dday">D-27</div>
                          </div>
                          <div className="list_info">
                            <div className="list_info_title">전시 일정</div>
                            <div className="list_info_day">{item.date}</div>
                          </div>
                          <div className="list_info">
                            <div className="list_info_title">장소</div>
                            <div className="list_info_day">{item.location}</div>
                          </div>
                        </div>
                        <div className="center_right_link">
                          <div className="link_wrap1">
                            <Link className="center_link" to={item.link}>
                              <span className="center_link_text">홈페이지</span>
                            </Link>
                          </div>
                          <div className="link_wrap2">
                            <Link
                              className="center_booklink"
                              to={item.bookinglink}
                            >
                              <span className="center_link_text">예약하기</span>
                            </Link>
                          </div>
                        </div>
                        <div className="ticket_bc"></div>
                      </div>
                    </div>
                  </div>
                  <div className="ticket_right">
                    <span className="right_bg" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 커스텀페이지 네이션 */}
          <div className="ticket_pagenation_wrap">
            <div className="ticket_pagination">
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
