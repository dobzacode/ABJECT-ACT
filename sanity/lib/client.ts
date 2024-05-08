// ./src/utils/sanity/client.ts

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './api';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    enabled: process.env.VERCEL_ENV === 'preview',
    studioUrl: '/studio'
  }
});
