import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '../prisma/generated';
import { db } from './db';

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: db,
  },
  relayOptions: {
    cursorType: 'String',
    clientMutationId: 'omit',
    pageInfoTypeOptions: {
      shareable: true,
    },
    hasNextPageFieldOptions: {
      nullable: true,
    },
    hasPreviousPageFieldOptions: {
      nullable: true,
    },
  },
});
