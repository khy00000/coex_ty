import React from "react";
import { Link } from "react-router-dom";
import FadeInGSAP from "../hooks/FadeInGSAP";

interface MediaMetaItem {
  name: string;
  link: string;
}

const Mediawall: React.FC = () => {

  const mediaImg: string[] = Object.values(
    import.meta.glob("../assets/img/bg/mediawall_con*.jpg", {eager: true, import: "default"}));

  const mediametaItem: MediaMetaItem[] = [
    { name: "INSTAGRAM", link: "#" },
    { name: "YOUTUBE", link: "#" },
    { name: "FACEBOOK", link: "#" },
    { name: "NAVER BLOG", link: "#" },
    { name: "TWITTER", link: "#" },
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
                {mediametaItem.map((item, index) => (
                  <li key={index} className="mediameta_item_list">
                    <Link to={item.link} className="mediameta_item_list_link">
                      {item.name}
                    </Link>
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
};

export default Mediawall;
