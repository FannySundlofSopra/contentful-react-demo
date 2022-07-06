import {useState, useEffect} from "react";
import './App.css';
import { CDAclient, CMAclient } from "./config";

function App() {

  //const [startPage, setStartPage] = useState(null);
  const [title, setTitle] = useState(null);
  const [logo, setLogo] = useState(null);
  const [navigation, setNavigation] = useState(['',''])


  useEffect(() => {
     CDAclient.getEntries({
      content_type: 'header'
     })
    .then((response) => setPageData(response.items))
    .catch(console.error)
  }, []);
  

  function setPageData(pages) {
    
    pages.forEach(page => {
    setTitle(page.fields.title)
    setLogo(page.fields.logo.fields.file.url)
    setNavigation(page.fields.navigation)
    // page.fields.navigation.map(navItem => 
    //   setNavigationItem(navItem)
    //   );
     });
  }
console.log(navigation);

    function Nav() {
    if (!navigation) return
     return navigation.map((n, index) => {
      console.log(n);
       return <li key={index}>{n.fields?.categoryName}</li>;
      });
    }

return (
    <div className="App">
       <header className="App-header">
       <h1>{title}</h1>
       <img className="App-logo"
     src={logo}
     alt="Bild"/>
      </header>
      <ul>
         {Nav()} 
      </ul>
    </div>
  );
}

export default App;