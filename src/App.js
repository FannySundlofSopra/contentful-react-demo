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

  const [page, setPage] = useState(null);

  useEffect(() => {
     CDAclient.getEntries()
    .then((response) => setPage(response.items))
    .catch(console.error)
  }, []);


  console.log(page)

  if (!page) {
    return "Loading...";
  } 

//   <img src={page.logo.url} className="App-logo" alt={page.logo.description} />
//   <p>
//   {page.title}
// </p>

return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
