
import {useState, useEffect} from "react";
import './App.css';

const query = `{
  headerCollection {
    items {
      title
      logo {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}`

function App() {

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/43o547dfys9y`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer sjWlleHTWjJsfXBFvEd41HS9NfKdBw4QjW-ixQLdE0Q",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        // rerender the entire component with new data
        setPage(data.headerCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  } 

return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt={page.logo.description} />
        <p>
          {page.title}
        </p>
      </header>
    </div>
  );
}

export default App;
