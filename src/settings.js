module.exports = {
  GMAPS_KEY: require('./config/gmaps').GMAPS_KEY,
  API_URL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'api/'
}
