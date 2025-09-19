import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footersns, footerinfo, familysite } from "../data/footerData";
import chatbotLogo from "../assets/img/logo/chatbot_logo.png";
import useResponsive from "../components/useResponsive";

const Footer = () => {
  // 패밀리 사이트 오픈
  const [active, setActive] = useState(false);

  // 탑버튼 visible
  const [visible, setVisible] = useState(false);
  // 탑버튼 푸터 고정
  const [footerFix, setFooterFix] = useState(false);

  // 챗봇 아이콘 클릭 close/챗봇 컨테이너 활성 비활성
  const [cbActive, setCbActive] = useState(false);
  // 챗봇 닫기 버튼
  const [cbClose, setCbclose] = useState(false);

  // 반응형
  const { isTablet, isMobile } = useResponsive();

  // 탑버튼 visible & 고정
  useEffect(() => {
    const handlescroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      // 푸터 높이보다 조금 작게 설정
      const scrollFooter = isMobile ? 1300 : isTablet ? 900 : 400;
      const isNeerFooter =
        scrollTop + windowHeight >= bodyHeight - scrollFooter;

      //탑버튼 visible 탑버튼 보여줄 조건: 푸터에 가까워지지 않았고 800px 이상 스크롤했을 때
      setVisible(!isNeerFooter && scrollTop > 800);
      //푸터에 닿고 조금 지났을때
      setFooterFix(isNeerFooter);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, [isMobile, isTablet]);

  // 탑버튼 클릭 이벤트
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 챗봇 close 아이콘 활성/비활성
  const chatbotActive = () => {
    setCbActive((prev) => !prev);
  };

  // 챗봇 오른쪽 닫기
  const cbiconClose = () => {
    setCbclose(true);
  };

  return (
    <footer id="footer" role="contentinfo">
      <div className="center-wrap">
        <div className="footer">
          <div className="footermain">
            <div className="footermaininfo">
              <div className="footerinfo_logo">
                <span className="footerinfo_logo_text blind">코엑스</span>
              </div>

              <address className="footeraddress">
                <div className="address_item">
                  서울특별시 강남구 영동대로 513
                </div>
                <div className="address_item">(삼성동, 코엑스) 06164</div>
              </address>
            </div>

            <Link className="tel" to="#">
              대표번호 02-6000-0114
            </Link>
          </div>

          <div className="footernav">
            <ul className="footernavlist">
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  행사일정
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  오시는 길
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  주차안내
                </Link>
              </li>
              <li className="footernavlist_item">
                <Link className="footernav_link" to="#">
                  편의시설
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerlink">
            <ul className="footerlinklist">
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Coex 소개
                </Link>
              </li>
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Cyber Coex
                </Link>
              </li>
              <li className="footerlinklist_item">
                <Link to="#" className="footerlink_link">
                  Coex MICE Cluster
                </Link>
              </li>
            </ul>

            <ul className="footerlinksns">
              {footersns.map((sns, s) => (
                <li key={s} className="footerlinksns_item">
                  <Link to="#" className="footersns_link" title={sns.name}>
                    <img
                      src={sns.icon}
                      alt={sns.name}
                      className="footersns_icon"
                      width="18"
                      height="18"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footeinfo">
            <ul className="footerinfo_list">
              {footerinfo.map((info, i) => (
                <li key={i} className="footerinfo_item">
                  <Link to="#" className="footerinfo_link">
                    {info}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="family_site">
              {/* 패밀리 사이트 버튼 */}
              <button
                className={`family_list_link ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}
              >
                Family Site
              </button>
              {/* 패밀리 메뉴 */}
              <ul className="family_site_item_box">
                {familysite.map((family, f) => (
                  <li key={f} className="family_site_item">
                    <Link to="#" className="family_site_item_link">
                      {family}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          ⒸCOPYRIGHT 2023 Coex. All Rights Reserved
        </div>

        {/* 탑버튼 */}
        <button
          onClick={scrollToTop}
          className={`top_button ${visible ? "visible" : ""} ${
            footerFix ? "footerFix" : ""
          }`}
        >
          <span className="top_text blind">Top</span>
        </button>
      </div>

      {/* 챗봇 */}
      <div className={`chatbot_wrap ${visible ? "visible" : ""}`}>
        {/* 챗봇 */}
        <div
          className={`chatbot ${cbActive ? "active" : ""}  ${
            cbClose ? "cb_close" : ""
          } `}
          onClick={chatbotActive}
        >
          <div className="chatbot_button">
            {/* 챗봇 아이콘 */}
            <div className="chatbot_icon"></div>
            {/* 챗봇 컨테이너 활성 & 닫기 */}
            <div className="chatbot_active_x"></div>
          </div>
        </div>
        {/* 챗봇 닫기 */}
        <div
          className={`chatbot_close ${cbClose ? "cb_close" : ""}`}
          onClick={cbiconClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.19 64.19"
            width="24"
            height="24"
            className="close_svg"
          >
            <g data-name="chatbot-close">
              <circle
                cx="32.1"
                cy="32.1"
                r="32.1"
                className="chatbot_close_bg"
              />
              <line
                x1="41.58"
                y1="22.28"
                x2="22.62"
                y2="41.24"
                className="chatbot_close_x"
              />
              <line
                x1="41.58"
                y1="41.24"
                x2="22.62"
                y2="22.28"
                className="chatbot_close_x"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* 챗봇 컨테이너 */}
      <div
        className={`chatbot_container_wrap ${cbActive ? "active" : ""} ${
          cbClose ? "cb_close" : ""
        } `}
      >
        <div className="chatbot_container">
          <div className="chatbot_header">
            <div className="chatbot_logo">
              <img src={chatbotLogo} alt="chatbot_logo" />
            </div>
            <span className="chatbot_name">VISITOR</span>
          </div>

          <div className="chatbot_chatarea">
            <div className="message">
              <div className="text">
                안녕하세요 🤚
                <br />
                <br />
                안내를 도와드릴 코엑스 챗봇입니다.
                <br />
                <br />
                궁금하신 점을 입력하시거나 아래 버튼을
                <br />
                눌러주세요!
              </div>
              <div className="chatbutton_list">
                <button className="chatinfo_item">행사일정 안내 📆</button>
                <button className="chatinfo_item">주차 안내 🚗</button>
                <button className="chatinfo_item">교통편 안내 🚈</button>
                <button className="chatinfo_item">편의시설 안내 🛍️</button>
                <button className="chatinfo_item">문의사항 남기기 📨</button>
              </div>
            </div>
          </div>

          <div className="chatbot_input">
            <div className="chatbot_input_inner">
              <svg
                data-v-170f181a=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-v-170f181a="" clipPath="url(#clip0_1718_122)">
                  <path
                    data-v-170f181a=""
                    d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="지금은 상담시간이 아닙니다."
                title="여기에 입력해 주세요."
                tabIndex={0}
                className="input_chatbot"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
