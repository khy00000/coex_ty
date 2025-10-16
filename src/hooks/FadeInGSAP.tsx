import { useRef, useEffect, isValidElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInGSAPProps {
  children: ReactElement;
  delay?: number;
}

const FadeInGSAP: React.FC<FadeInGSAPProps> = ({ children, delay = 0 }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );

    // 클린업 함수
    return () => {
      gsap.killTweensOf(el);
    };
  }, [delay]);

  // 자식이 유효한 엘리먼트인지 확인, ref 프롭스 자식에게 전달
  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, { ref: sectionRef });
  }

  console.warn("단일 엘리먼트만 허용합니다.");
  return null;
};

export default FadeInGSAP;