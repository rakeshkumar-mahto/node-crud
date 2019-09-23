module.exports = {
  apiVersion: 'v1',
  server: 'dev',
  host: 'http://localhost:3001',
  dev: {
    host: 'http://localhost',
    port: 3001
  },
  database: {
    host: 'localhost',
    port: '27017',
    dbName: 'customer-db'
  },
  APIKey: {
    customerAPIKey: '056ab3b1152aab75d544fe37aa3bd283'
  }
};