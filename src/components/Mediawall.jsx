import React from "react";
import { Link } from "react-router-dom";

import mediawallimg1 from "../assets/img/bg/mediawall_con1.jpg";
import mediawallimg2 from "../assets/img/bg/mediawall_con2.jpg";
import mediawallimg3 from "../assets/img/bg/mediawall_con3.jpg";
import mediawallimg4 from "../assets/img/bg/mediawall_con4.jpg";
import mediawallimg5 from "../assets/img/bg/mediawall_con5.jpg";
import mediawallimg6 from "../assets/img/bg/mediawall_con6.jpg";

import FadeInGSAP from "../hooks/FadeInGSAP";

function Mediawall() {
  const mediaImg = [
    mediawallimg1,
    mediawallimg2,
    mediawallimg3,
    mediawallimg4,
    mediawallimg5,
    mediawallimg6,
  ];

  const mediametaItem = [
    "INSTAGRAM",
    "YOUTUBE",
    "FACEBOOK",
    "NAVER BLOG",
    "Twitter",
  ];

  return (
    <div className="mediawall">
      <div className="media_back"></div>

      <div className="center-wrap">
        <div className="mediawall_left">
          <FadeInGSAP delay={0.9}>
            <h3 className="mediawall_title_wrap">
              <span className="mediawall_title">Media Wall</span>
            </h3>
          </FadeInGSAP>

          <div className="mediameta">
            <FadeInGSAP delay={1}>
              <ul className="mediameta_item">
                {mediametaItem.map((metaitem, m) => (
                  <li key={m} className="mediameta_item_list">
                    <Link to="#" className="mediameta_item_list_link">{metaitem}</Link>
                  </li>
                ))}
              </ul>
            </FadeInGSAP>

            <div className="mediawall_sub">
              <FadeInGSAP delay={1.1}>
                <span className="mediawall_sub_text">
                  To Create The Best
                  <br />
                  Event Service
                </span>
              </FadeInGSAP>
            </div>
          </div>
        </div>

        <div className="mediawall_right">
          {/* 미디어 이미지 영역 */}
          <div className="mediawall_right_wrap">
            {mediaImg.map((img, index) => (
              <div key={index} className="mediawall_ins_img">
                <img src={img} alt={`mediawallimg${index + 1}`} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="carousel_icon"
                >
                  <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48ZM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6Zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mediawall;