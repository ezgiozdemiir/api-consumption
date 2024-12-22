import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'dmm7op',
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/commands.ts',
  },
});
