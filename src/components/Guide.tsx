import React from "react";
import { Link } from "react-router-dom";
import { guideData } from "../assets/data/guideData";
import FadeInGSAP from "../hooks/FadeInGSAP";

// guideData 아이템 타입
interface GuideItem {
  id: number;
  link: string;
  icon: string;
  title: string;
}

const Guide: React.FC = () => {
  return (
    <div className="guide">
      <FadeInGSAP delay={0.3}>
        <div className="guide_left">
          <h3 className="guide_left_title">대관안내</h3>
          <span className="guide_left_title_text">
            전시 및 회의실
            <br />
            임대 정보
          </span>
          <span className="mo-guide_left_title_text">
            전시 및 회의실 임대 정보
          </span>
        </div>
      </FadeInGSAP>

      <FadeInGSAP delay={0.4}>
        <div className="guide_right">
          <div className="guide_right_title">GUIDE</div>
          <div className="guide_right_list">
            <ul className="guide_right_list_wrap">
              {guideData.map((item: GuideItem) => (
                <li key={item.id} className="guide_right_item">
                  <Link
                    to={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="guide_right_item_link"
                  >
                    <img
                      className="guide_right_icon"
                      src={item.icon}
                      alt={`가이드 아이콘 ${item.id}`}
                    />
                    <div className="guide_right_text">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInGSAP>
    </div>
  );
};

export default Guide;