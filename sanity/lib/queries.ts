import { groq } from 'next-sanity';

export interface Event {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  categorie:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building'
    | 'Identité visuelle'
    | "Vidéo d'entreprise"
    | 'Stratégie de communication';
  date: string;
  titre: string;
  description: string;
  client: string;
  metadescription: string;
  metatitre: string;
  imageGallery?: Image[];
  video?: {
    asset: {
      _ref: string;
    };
  };
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
