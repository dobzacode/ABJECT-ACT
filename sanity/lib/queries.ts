import { groq } from 'next-sanity';

export interface Event {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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

export const EVENTS_QUERY = groq`*[_type == "evenement"]`;

export type EventsQueryResponse = Event[] | null;
