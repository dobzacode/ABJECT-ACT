import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import event from './schemaTypes/event';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, event]
};
