import { groq } from 'next-sanity';

export interface Event {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  date: string;
  titre: string;
  imageGallery: Image[];
}

export interface Image {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
  blurSrc: string;
}

export const EVENTS_QUERY = groq`*[_type == "event"]`;

export type EventsQueryResponse = Event[] | null;
