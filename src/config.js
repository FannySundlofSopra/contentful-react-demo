const contentfulCDA = require("contentful");
const contentfulCMA = require('contentful-management')

export const CMAclient = contentfulCMA.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: ''
  
})
export const CDAclient = contentfulCDA.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  space: '',
  environment: '', // defaults to 'master' if not set
  accessToken: ''
})