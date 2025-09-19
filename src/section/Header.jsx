import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import useResponsive from "../hooks/useResponsive";

const Header = () => {
  // 헤더 우측 서치 영역 액티브
  const [active, setActive] = useState(false);
  // 헤더 숨김 효과
  const [hidden, setHidden] = useState(false);
  const [lastscroll, setLastcroll] = useState(0);
  // 반응형 훅
  const { isDesktop } = useResponsive();
  // 모바일 메뉴 1뎁스
  const [isMenu, setIsMenu] = useState(false);
  // 모바일 메뉴 2뎁스 어로우 액티브
  const [isOpen, setIsOpen] = useState(false);
  // 모바일 메뉴 등장 효과
  const modepth1Ref = useRef(null);

  // 헤더 숨김
  useEffect(() => {
    const onscroll = () => {
      const currentscroll = window.scrollY;

      // 최상단에서는 항상 보이도록
      if (currentscroll <= 0) {
        setHidden(false);
        setLastcroll(0);
        return;
      }

      // 80px 이상 움직였을 때 숨김 처리
      if (Math.abs(currentscroll - lastscroll) > 80) {
        setHidden(currentscroll > lastscroll);
        setLastcroll(currentscroll);
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, [lastscroll, isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    const items = modepth1Ref.current?.querySelectorAll(".mo-li");

    if (isMenu && items?.length) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: -30,
        },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [isMenu, isDesktop]);

  return (
    <header id="header" className={`header ${hidden ? "hide" : ""}`}>
      <div className="center-wrap">
        {/* 모바일 버튼 */}
        <button
          className={`mo_menu ${!isDesktop && isMenu ? "momenuopen" : ""}`}
          onClick={(e) => {
            if (isDesktop) return;
            e.preventDefault();
            e.stopPropagation();
            setIsMenu((prev) => !prev);
          }}
        >
          <span className="mo_menu_item"></span>
          <span className="mo_menu_item"></span>
          <span className="mo_menu_item"></span>
        </button>
        <button
          className={`mo_menu_close ${
            !isDesktop && isMenu ? "momenuopen" : ""
          }`}
          onClick={(e) => {
            if (isDesktop) return;
            e.preventDefault();
            e.stopPropagation();
            setIsMenu((prev) => !prev);
          }}
        ></button>

        {/* header logo */}
        <h1 className={`logo_header ${!isDesktop && active ? "hide" : ""}`}>
          <a href="/" className="logo_header_link" aria-label="Home"></a>
          <span className="logo_header_text blind">
            <span>코엑스</span>
          </span>
        </h1>

        {/* primary menu */}
        <nav
          id="top_navi"
          className={`primary_menu ${!isDesktop && isMenu ? "momenuopen" : ""}`}
          aria-label="주요 메뉴"
        >
          <ul className="primary_menu_box" ref={modepth1Ref}>
            <li className="primary_menu_1 pc-li mo-li">
              <Link to="/" className="depth1">
                행사
              </Link>
            </li>

            {/* 2depth */}
            <li
              className="primary_menu_2 pc-li mo-li"
              onClick={(e) => {
                if (isDesktop) return;
                e.preventDefault();
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
            >
              <Link to="/" className="depth2on">
                가이드
                <span
                  className={`has-children ${
                    !isDesktop && isOpen ? "rotate" : ""
                  }`}
                ></span>
              </Link>
              <ul
                className={`depth2_menu ${
                  !isDesktop && isOpen ? "active" : ""
                }`}
              >
                <li className="primary_menu_4 menu">
                  <Link to="/">오시는 길</Link>
                </li>
                <li className="primary_menu_5 menu">
                  <Link to="/">실내 길찾기</Link>
                </li>
                <li className="primary_menu_6 menu">
                  <Link to="/">Coex VR</Link>
                </li>
                <li className="primary_menu_7 menu">
                  <Link to="/">주차안내</Link>
                </li>
                <li className="primary_menu_8 menu">
                  <Link to="/">편의시설</Link>
                </li>
                <li className="primary_menu_9 menu">
                  <Link to="/">알림마당</Link>
                </li>
                <li className="primary_menu_10 menu">
                  <Link to="/">고객 문의</Link>
                </li>
                <li className="primary_menu_11 menu">
                  <Link to="/">뉴스</Link>
                </li>
              </ul>
            </li>

            <li className="primary_menu_3 pc-li mo-li">
              <Link to="/" className="depth1">
                하이라이트
              </Link>
            </li>
            <li className="primary_menu_pro_1 pc-li mo-li">
              <Link to="/" className="depth1_pro">
                <span className="box">Business</span>
                <span className="pro-mo-arrow"></span>
              </Link>
            </li>
            <li className="primary_menu_4 pc-li mo-li">
              <Link to="/" className="depth1 magok">
                마곡 컨벤션센터
              </Link>
            </li>
          </ul>
        </nav>

        {/* header search */}
        <div className="header_promotion_wrap">
          <div className="header_promotion">
            <Link to="/" className="header_pro_link">
              마곡 컨벤션센터
            </Link>
          </div>

          <div className={`header_lang ${!isDesktop && active ? "hide" : ""}`}>
            <ul className="header_lang_box">
              <li className="kor current">
                <Link to="/">KOR</Link>
              </li>
              <li className="eng">
                <Link to="#">ENG</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 우측 돋보기 아이콘 영역 */}
        <div className="header_search_link">
          <Link
            to="#"
            className={`header_search_link_open ${active ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(true);
            }}
          >
            <span className="blind">검색창 열기</span>
          </Link>
          <Link
            to="#"
            className={`header_search_link_close ${active ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(false);
            }}
          >
            <span className="blind">검색창 닫기</span>
          </Link>
        </div>

        {/* 서치창 */}
        <div className={`search_bar ${active ? "active" : ""}`}>
          <input
            id="search_bar_keyworld"
            className="search_bar_keyword"
            type="search"
          />
          <button type="button" className="search_bar_button">
            <span className="blind">검색</span>
          </button>
          <div className="keyword_area">
            <div className="title">추천검색어</div>
            <div className="keyword_list">
              <ul className="keyword_list_box">
                <li className="keyword_list_1">#코엑스 전시</li>
                <li className="keyword_list_2">#행사</li>
                <li className="keyword_list_3">#주차안내</li>
                <li className="keyword_list_4">#편의시설</li>
                <li className="keyword_list_5">#오시는 길</li>
                <li className="keyword_list_6">#컨퍼런스</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
