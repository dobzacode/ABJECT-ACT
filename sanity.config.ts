import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { frFRLocale } from '@sanity/locale-fr-fr';
import { presentationTool } from 'sanity/presentation';
import { dataset, projectId, studioUrl } from './sanity/lib/api';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  plugins: [
    structureTool(),
    frFRLocale(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      },
      title: 'Aperçu'
    })
  ],
  schema: {
    types: schema.types
  }
});
