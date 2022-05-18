import {useState, useEffect} from "react";
import './App.css';


// CONTENTFUL CONFIG 
const contentfulCDA = require("contentful");
const contentfulCMA = require('contentful-management')

export const CDAclient = contentfulCDA.createClient({
  space: '43o547dfys9y',
  environment: 'fanny', // defaults to 'master' if not set
  accessToken: 'sjWlleHTWjJsfXBFvEd41HS9NfKdBw4QjW-ixQLdE0Q'
})

export const CMAclient = contentfulCMA.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: 'CFPAT-QTQmBS2vubwsudLrTi2p6zGQxx9oQTWJtJoVfIYDsA0'
})


function App() {

  const [startPage, setStartPage] = useState(null);
  const [title, setTitle] = useState(null);
  const [logo, setLogo] = useState(null);


  useEffect(() => {
     CDAclient.getEntries()
    .then((response) => setPageData(response.items))
    .catch(console.error)
  }, []);
  

  function setPageData (page) {
    setStartPage(page[0])
    setTitle(page[0].fields.title)
    setLogo(page[0].fields.logo.fields.file.url)
  }
  
  console.log(startPage)

  if (!startPage) {
    return "Loading...";
  } 

return (
    <div className="App">
      <header className="App-header">
       <h1>{title}</h1>
       <img className="App-logo"
     src={logo}
     alt="Bild"/>
      </header>
    </div>
  );
}

export default App;