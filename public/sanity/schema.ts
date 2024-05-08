import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import evenement from './schemaTypes/evenement';

import publication from './schemaTypes/publication';
import revueScouteActuelle from './schemaTypes/revue-scoute-actuelle';
import revueScouteAffiche from './schemaTypes/revue-scoute-affiche';
import spectacle from './schemaTypes/spectacle';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [publication, blockContent, evenement, spectacle, revueScouteActuelle, revueScouteAffiche]
};
