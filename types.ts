
export interface MetaData {
  title: string;
  description: string;
}

export interface HeroData {
  title: string;
  season: string;
  slogan: string;
  cta_text: string;
}

export interface IntroData {
  heading: string;
  content: string;
}

export interface SelectionData {
  heading: string;
  deadline_display: string;
  deadline_note: string;
  categories: string[];
  download_link: string;
  download_text: string;
}

export interface EventInfoData {
  time: string;
  location_main: string;
  location_sub: string;
}

export interface ScheduleItem {
  id: number;
  date: string;
  time: string;
  brand: string;
  venue: string;
  status: 'upcoming' | 'live' | 'ended';
}

export interface Config {
  meta: MetaData;
  hero: HeroData;
  intro: IntroData;
  selection: SelectionData;
  event_info: EventInfoData;
}
