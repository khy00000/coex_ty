import React, { useState } from "react";
import { Link } from "react-router-dom";

import FadeInGSAP from "../hooks/FadeInGSAP";

function News({data}) {
  // 활성 탭 상태
  const [activeTabId, setActiveTabId] = useState(0);

  // 활성화된 탭 콘텐츠
  const activeTab = data.find((news) => news.tabid === activeTabId);

  // 날짜 최신순으로 정렬 및 날짜 가공
  const sortedContents = activeTab?.contents
    ?.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((item) => {
      const date = new Date(item.date);
      return {
        ...item,
        datemonth: `${date.getFullYear()}.${String(
          date.getMonth() + 1
        ).padStart(2, "0")}`,
        dateday: date.getDate(),
      };
    });

  return (
    <div className="news">
      {/* 뉴스 타이틀 */}
      <div className="news_title">
        <h3 className="news_title_wrap">
          <FadeInGSAP delay={0.7}>
            <span className="news_title_text">코엑스 소식</span>
          </FadeInGSAP>
        </h3>
        <div className="news_link_wrap">
          <Link className="news_link" to="#">
            More
          </Link>
        </div>
      </div>
      <div className="news_con">
        {/* 탭메뉴 타이틀 */}
        <div className="news_con_tap_wrap">
          <ul className="news_con_tap">
            {data.map((news) => (
              <li
                key={news.tabid}
                className={`news_con_tap_item ${
                  news.tabid === activeTabId ? "active" : ""
                }`}
              >
                <button
                  type="button"
                  className="news_con_tap_item_button"
                  onClick={() => setActiveTabId(news.tabid)}
                >
                  {news.tabtitle}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 탭메뉴 리스트 영역 */}
        <div className="news_con_list">
          <FadeInGSAP delay={0.8}>
            <ul className="news_area">
              {sortedContents?.map((contentsItem) => (
                <li className="news_item" key={contentsItem.contentsid}>
                  <Link to={contentsItem.link} className="news_item_link">
                    <div className="news_item_date">
                      <span className="news_item_dateday">
                        {contentsItem.dateday}
                      </span>
                      <span className="news_item_datemonth">
                        {contentsItem.datemonth}
                      </span>
                    </div>
                    <div className="news_item_title">{contentsItem.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInGSAP>
        </div>
      </div>
    </div>
  );
}

export default News;