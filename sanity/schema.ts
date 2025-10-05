import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import event from './schemaTypes/event';
import eventGallery from './schemaTypes/eventGallery';
import label from './schemaTypes/label';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, eventGallery, event, label]
};
