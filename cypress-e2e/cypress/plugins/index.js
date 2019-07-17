// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
require('dotenv').config();
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env = config.env || {};
  // you could extract only specific variables
  // and rename them if necessary
  config.env.KEYCLOAK_AUTH_URL = process.env.KEYCLOAK_AUTH_URL;
  config.env.KEYCLOAK_AUTH_BODY = process.env.KEYCLOAK_AUTH_BODY;
  config.env.TEST_CC = process.env.TEST_CC;
  config.env.TEST_CC_CVD = process.env.TEST_CC_CVD;
  return config;
}
