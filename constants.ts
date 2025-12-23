
import { Config, ScheduleItem } from './types';

export const CONFIG: Config = {
  meta: {
    title: "Taipei Fashion Week AW26 | The New Avant-Garde",
    description: "臺北時裝週 AW26 官方網站暨徵選平台，徵件即日起至2025年12月24日。"
  },
  hero: {
    title: "Taipei Fashion Week",
    season: "AW26",
    slogan: "The New Avant-Garde",
    cta_text: "徵選報名 / CALL FOR ENTRIES"
  },
  intro: {
    heading: "ABOUT",
    content: "本計畫旨在打造「臺北時裝週 AW26」的數位門戶，不僅是資訊的集散地，更是臺灣時尚設計力與國際接軌的第一站。透過極簡流暢的 UI/UX 設計，呈現臺灣時尚的多元與創新。"
  },
  selection: {
    heading: "CALL FOR ENTRIES",
    deadline_display: "2025.12.24 (Wed)",
    deadline_note: "徵件截止",
    categories: [
      "秀展類 (Runway / Presentation)",
      "活動類 (Events)"
    ],
    download_link: "https://tinyurl.com/2f5pp9xw",
    download_text: "下載徵選資料包 / Download Kit"
  },
  event_info: {
    time: "2026 Spring (April)",
    location_main: "Songshan Cultural and Creative Park",
    location_sub: "Taipei Fashion Landmarks"
  }
};

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: 1,
    date: "2026-03-25",
    time: "19:00",
    brand: "Opening Show",
    venue: "Warehouse 1",
    status: "upcoming"
  },
  {
    id: 2,
    date: "2026-03-26",
    time: "14:00",
    brand: "Sustainable Collective",
    venue: "Warehouse 4",
    status: "upcoming"
  },
  {
    id: 3,
    date: "2026-03-26",
    time: "18:00",
    brand: "Avant-Garde Showcase",
    venue: "Warehouse 1",
    status: "upcoming"
  },
  {
    id: 4,
    date: "2026-03-27",
    time: "15:00",
    brand: "New Talent Award",
    venue: "Taipei Performing Arts Center",
    status: "upcoming"
  }
];
