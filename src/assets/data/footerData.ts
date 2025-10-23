export interface FooterSnsItem {
  name: string;
  icon: string;
}

export interface FooterData {
  sns: FooterSnsItem[];
  info: string[];
  family: string[];
}

// 데이터
const footersns: FooterSnsItem[] = [
  {
    name: "인스타그램",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_insta.svg",
  },
  {
    name: "유투브",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_youtube.svg",
  },
  {
    name: "페이스북",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_facebook.svg",
  },
  {
    name: "링크드인",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_linkedin.svg",
  },
  {
    name: "엑스",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_x.svg",
  },
  {
    name: "네이버 블로그",
    icon: "https://raw.githubusercontent.com/khy00000/storage/2b5ae35d0ea67555424a7e6feca8e6c61ce28614/coex/img/icon/footer_naverblog.svg",
  },
];

const footerinfo: string[] = [
  "안전경영",
  "친환경",
  "개인정보처리방침",
  "이메일무단수집거부",
  "무역센터 신문고",
  "사이트맵",
];

const familysite: string[] = [
  "KITA",
  "WTC Seoul",
  "KTNET",
  "CALT",
  "CAAM",
  "Coex VINA",
  "CoexMall",
];

// 객체로 합쳐 내보내기
export const footerData: FooterData = {
  sns: footersns,
  info: footerinfo,
  family: familysite,
};
