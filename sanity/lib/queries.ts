import { groq } from 'next-sanity';

export interface EventGallery {
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

export interface EventItem {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  date: string;
  titre: string;
  lieu: string;
  image: Image;
}

export const GALLERY_EVENTS_QUERY = groq`*[_type == "event"]`;
export type GalleryEventsQueryResponse = EventGallery[] | null;

export const EVENTS_LIST_QUERY = groq`*[_type == "eventDate"]`;
export type EventsListQueryResponse = EventItem[] | null;

export interface LabelItem {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  link: string;
  name: string;
  picture: Image;
}

export const LABELS_QUERY = groq`*[_type == "label"]`;
export type LabelsQueryResponse = LabelItem[] | null;
