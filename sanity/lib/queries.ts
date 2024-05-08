import { PortableTextBlock } from '@portabletext/react';
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

export interface EventWithImgQueryRes extends Omit<Event, 'imageGallery'> {
  imageGallery: Image[];
}

export interface EventWithVideoQueryRes extends Omit<Event, 'video'> {
  video: {
    asset: {
      _ref: string;
    };
  };
}

export interface Author {
  _type: string;
  _ref: string;
}

export interface Image {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
  blurSrc: string;
}

export interface ImageWithUrl {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
}

export interface Post {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  metatitre: string;
  metadescription: string;
  titre: string;
  auteur?: Author;
  mainImage: Image;
  imageGallery?: Image[];
  description: string;
}

export interface Affiche {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  imageGallery: Image[];
}

export interface DistributionItem {
  _key: string;
  nom: string;
  picture: Image;
}

interface RevueScoute {
  _updatedAt: string;
  titre: string;
  _createdAt: string;
  _type: string;
  metatitre: string;
  distribution: DistributionItem[];
  _id: string;
  date: DateItem[];
  mainImage: Image;
  metadescription: string;
  _rev: string;
  description: PortableTextBlock[];
}

export interface DateItem {
  ville: string;
  lien: string;
  _type: string;
  description: PortableTextBlock[];
  dates: string[];
  _key: string;
  emplacement: string;
}

export interface Spectacle {
  dates?: DateItem[];
  metadescription: string;
  _id: string;
  imageGallery: Image[];
  miseEnScene: string[];
  _rev: string;
  ecritureEtJeu: string[] | null;
  ecritureEtJeuEtMiseEnScene: string[] | null;
  duree: string[] | null;
  body: PortableTextBlock[];
  decors: string[] | null;
  lumiereEtRegie: string[] | null;
  musiqueEtSon: string[] | null;
  mainImage: Image;
  _type: string;
  metatitre: string;
  _createdAt: string;
  titre: string;
  costumes: string[] | null;
  photos: string[] | null;
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
}

export const POSTS_QUERY = groq`*[_type == "publication" && defined(slug)]`;

export type PostsQueryResponse =
  | (Post & {
      body?: PortableTextBlock[] | null;
    })[]
  | null;

export const POST_QUERY = groq`*[_type == "publication" && slug.current == $slug][0]`;

export type PostQueryResponse =
  | (Post & {
      body?: PortableTextBlock[] | null;
    })
  | null;

export const EVENTS_QUERY = groq`*[_type == "evenement"]`;

export type EventsQueryResponse = Event[] | null;

export const AFFICHES_QUERY = groq`*[_type == "revueScouteAffiche"]`;

export type AffichesQueryResponse = Affiche[] | null;

export const REVUESCOUTEACTUELLE_QUERY = groq`*[_type == "revueScouteActuelle"]`;

export type RevueScouteActuelleQueryResponse = RevueScoute[] | null;

export const SPECTACLES_QUERY = groq`*[_type == "spectacle"]`;

export type SpectaclesQueryResponse = Spectacle[] | null;

export const SPECTACLE_QUERY = groq`*[_type == "spectacle" && slug.current == $slug][0]`;

export type SpectacleQueryResponse =
  | (Spectacle & {
      body?: PortableTextBlock[] | null;
    })
  | null;

export const SPECTACLES_AVEC_DATES_QUERY = groq`
  *[_type == "spectacle" && defined(dates)]
`;

export type SpectaclesAvecDatesQueryResponse = Spectacle[] | null;
