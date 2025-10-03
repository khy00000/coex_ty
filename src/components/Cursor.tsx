import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
};

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll<HTMLElement>(
      ".hero_title_wrap, .hero_slide_right, .here_title_arrow"
    );

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isDesktop]);

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