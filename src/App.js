import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CDAclient } from "./config";
import Header from "./components/Header";
import Category from "./components/CategoryPage";

export default function App() {
  const [headerData, setHeaderData] = useState(null);
  const [navigation, setNavigation] = useState(null);

  useEffect(() => {
    CDAclient.getEntries({
      content_type: "header",
    })
      .then((response) => setHeaderData(response.items))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!headerData || headerData?.length === 0) return;
    headerData.forEach((page) => {
      setNavigation(page.fields.navigation);
    });
  }, [headerData]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header props={headerData} />}>
          {navigation?.map((navItem) => {
            return (
              <Route
                path={navItem.fields?.slug + "/*"}
                element={<Category props={navItem} />}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}
