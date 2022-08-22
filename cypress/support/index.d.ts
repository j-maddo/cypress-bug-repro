// in cypress/support/index.d.ts
// load type definitions that come with Cypress module

// eslint-disable-next-line
/// <reference types="cypress" />
// eslint-disable-next-line
/// <reference types="node" />

declare module '@cypress/browserify-preprocessor';
declare module '@cypress/skip-test/support';

declare namespace Cypress {
}
