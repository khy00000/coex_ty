import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import useResponsive from "../hooks/useResponsive";
import FadeInGSAP from "../hooks/FadeInGSAP";

const Event = ({data}) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <div className="event">
      <div className="event_title_wrap">
        <FadeInGSAP delay={0.5}>
          <h3>
            <span className="event_title">진행 중인 행사</span>
            <span className="event_title_num">23</span>
          </h3>
        </FadeInGSAP>
        <Link to="#" className="event_cal_text">
          View All Events
        </Link>
      </div>

      {isMobile ? (
        <>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".event_pagination",
              clickable: true,
            }}
            loop={true}
            autoHeight={true}
            slidesPerView="auto"
            className="mo-event_table"
          >
            {data.slice(0, 10).map((item, index) => (
              <SwiperSlide className="mo-event-item-wrap" key={item.id}>
                {/* 이벤트 아이템 */}
                <Link to={item.link} className="mo-event-item">
                  <img
                    src={item.img}
                    alt={`이벤트 리스트이미지 ${item.id}`}
                    className="mo-event-img"
                  />
                  <div className="mo-event-data-wrap">
                    <div
                      className="mo-event-category"
                      data-category={item.category}
                    >
                      {item.category}
                    </div>
                    <div className="mo-event-title">{item.title}</div>
                    <div className="mo-event-date">{item.date}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="event_pagenation_wrap">
            <div className="event_pagination">
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </>
      ) : (
        <div className="event_table">
          <div className="event_table_wrap">
            {data.slice(0, 10).map((item, index) => (
              <div
                className={`
                event_list_item
                ${index === 0 ? "first_item" : ""}
                ${isDesktop && index > 5 ? "bottom_item" : ""}
                ${isDesktop && [2, 6].includes(index) ? "item_3_7" : ""}
                ${isTablet && [1, 4, 7].includes(index) ? "item_3_7" : ""}
                ${isTablet && index > 6 ? "bottom_item" : ""}
              `.trim()}
                key={item.id}
              >
                {/* 이벤트 아이템 */}
                <Link to={item.link} className={`event_list_item_link`}>
                  <div
                    className="evnet_list_item_category"
                    data-category={item.category}
                  >
                    {item.category}
                  </div>
                  <div className="event_list_item_title">{item.title}</div>
                  <div className="event_list_item_date">{item.date}</div>
                </Link>

                {/* 호버 아이템 */}
                <Link to={item.link} className="event_list_item_hover">
                  <img src={item.img} alt={`이벤트 리스트이미지 ${item.id}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
