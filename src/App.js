import {useState, useEffect} from "react";
import './App.css';


// CONTENTFUL CONFIG 
import {CDAclient, CMAclient} from "./config"


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