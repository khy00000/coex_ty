import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState(null);
  const [hovered, setHovered] = useState(false);

  // 1024 이하에서는 적용 안함
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // 현재 해상도 체크
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // 마우스 이동 이벤트
    const move = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", move);

    // 호버 대상 이벤트
    const targets = document.querySelectorAll(
      ".hero_title_wrap, .hero_slide_right, .here_title_arrow"
    );
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isDesktop]);

  // 렌더 조건
  if (!isDesktop || position === null) return null;

  return (
    <div
      className={`cursor ${hovered ? "cursor-hovered" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-txt">{hovered ? "View" : ""}</div>
    </div>
  );
};

export default Cursor;