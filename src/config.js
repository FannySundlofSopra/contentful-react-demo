const contentfulCDA = require("contentful");
const contentfulCMA = require('contentful-management')

export const CMAclient = contentfulCMA.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: 'CFPAT-QTQmBS2vubwsudLrTi2p6zGQxx9oQTWJtJoVfIYDsA0'
  
})
export const CDAclient = contentfulCDA.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  //accessToken: 'CFPAT-QTQmBS2vubwsudLrTi2p6zGQxx9oQTWJtJoVfIYDsA0'
    space: '43o547dfys9y',
  environment: 'fanny', // defaults to 'master' if not set
  accessToken: 'sjWlleHTWjJsfXBFvEd41HS9NfKdBw4QjW-ixQLdE0Q'
})