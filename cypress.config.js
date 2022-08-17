const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/',
  },
  projectId: '2b32af',
  retries: {
    runMode: 1,
  },
  db: {
    userName: 'root',
    password: '',
    server: 'localhost',
    options: {
      database: 'the360dev',
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
