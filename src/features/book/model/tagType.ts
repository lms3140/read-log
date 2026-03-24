/**
 * 장르
 */
export const BOOK_GENRES = [
  "소설",
  "시",
  "에세이",
  "인문",
  "철학",
  "사회",
  "역사",
  "과학",
  "기술/IT",
  "경제/경영",
  "자기계발",
  "예술/대중문화",
  "종교",
  "정치",
  "심리",
  "교육",
  "청소년",
  "만화",
  "잡지",
  "전문/학술",
  "기타",
] as const;

export type BookGenre = (typeof BOOK_GENRES)[number];

/**
 * 태그 카테고리별 상수
 */
export const BOOK_TAG_SECTIONS = [
  {
    category: "mood",
    label: "분위기",
    tags: [
      "잔잔함",
      "따뜻함",
      "우울함",
      "어두움",
      "희망적",
      "몰입감",
      "긴장감",
      "여운있음",
      "감동적",
      "유쾌함",
    ],
  },

  {
    category: "narrative",
    label: "서사/문체",
    tags: [
      "서사가탄탄함",
      "전개빠름",
      "전개느림",
      "문체좋음",
      "가독성좋음",
      "묘사풍부",
      "심리묘사",
      "철학적",
      "현실적",
      "상징적",
    ],
  },

  {
    category: "subject",
    label: "주제",
    tags: [
      "판타지",
      "사랑",
      "우정",
      "가족",
      "성장",
      "죽음",
      "상실",
      "치유",
      "전쟁",
      "정치",
      "사회비판",
      "계급",
      "노동",
      "여성서사",
      "정체성",
      "범죄",
      "추리",
      "복수",
      "생존",
      "여행",
      "자연",
      "예술",
      "종교",
      "과학",
      "심리학",
      "투자",
      "경영",
      "리더십",
      "생산성",
    ],
  },

  {
    category: "format",
    label: "형식/성격",
    tags: [
      "단편",
      "장편",
      "시리즈",
      "고전",
      "해설좋음",
      "입문용",
      "이론중심",
      "사례중심",
      "개념서",
    ],
  },

  {
    category: "readingExperience",
    label: "읽는 경험",
    tags: [
      "쉬움",
      "보통",
      "어려움",
      "짧게읽기좋음",
      "천천히읽기좋음",
      "재독하고싶음",
      "호불호갈림",
      "생각할거리많음",
    ],
  },

  {
    category: "region",
    label: "구분",
    tags: ["한국문학", "외국문학"],
  },
] as const;

export type BookTagSection = (typeof BOOK_TAG_SECTIONS)[number];
export type BookTagCategory = BookTagSection["category"];
export type BookTag = BookTagSection["tags"][number];
/**
 * UI 표시용 라벨
 */
export const BOOK_TAG_CATEGORY_LABELS: Record<BookTagCategory, string> = {
  mood: "분위기",
  narrative: "서사/문체",
  subject: "주제/소재",
  format: "형식/성격",
  readingExperience: "독서 경험",
  region: "지역/계열",
};
