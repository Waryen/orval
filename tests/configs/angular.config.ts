import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      target: '../generated/angular/petstore/endpoints.ts',
      schemas: '../generated/angular/petstore/model',
      client: 'angular',
      mock: true,
    },
    input: {
      target: '../specifications/petstore.yaml',
      override: {
        transformer: '../transformers/add-version.js',
      },
    },
  },
  tagsSplit: {
    output: {
      target: '../generated/angular/tags-split/endpoints.ts',
      schemas: '../generated/angular/tags-split/model',
      client: 'angular',
      mode: 'tags-split',
      mock: true,
    },
    input: {
      target: '../specifications/petstore.yaml',
      override: {
        transformer: '../transformers/add-version.js',
      },
    },
  },
  customClient: {
    output: {
      target: '../generated/angular/custom-client/endpoints.ts',
      schemas: '../generated/angular/custom-client/model',
      client: 'angular',
      mock: true,
      override: {
        mutator: '../mutators/custom-client-angular.ts',
      },
    },
    input: {
      target: '../specifications/petstore.yaml',
      override: {
        transformer: '../transformers/add-version.js',
      },
    },
  },
});
