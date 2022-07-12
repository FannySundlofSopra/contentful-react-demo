
import {useState, useEffect} from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { CDAclient } from "../config";
import Article from "./Article";
import Cards from "./Card";
import './CategoryPage.css';

function Category ({props}) {
    const [categoryName, setCategoryName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState(null)
    const [articles, setArticles] = useState(null)

    useEffect(() => {
      if (!props || props?.length === 0) return;
     
      setCategoryName(props.fields.categoryName)
      setDescription(props.fields.description)
      setImage(props.fields.image.fields.file.url)
      setCategoryId(props.sys.id)
     }, [props]);

     useEffect(() => {
        CDAclient.getEntries({
         content_type: 'articel',
        })
       .then((response) => setArticles(response.items))
       .catch(console.error)
      }, [categoryId]);

      if (!articles || articles?.length === 0) return;
    const filterArticles = articles.filter(article => {
        return article.fields.category[0].sys.id === categoryId
    })

    return (
      <>
      <div className="container">
      <div className="catbanner">
         <h1 className="bannerTitle">{categoryName}</h1>
         <p className="bannerDesc">{description}</p>
         <img 
            className="bannerImg"
            src={image}
            alt="Bild"/>
      </div>
      <Routes>
        <Route index element={<Cards props={filterArticles}/>} />
        <Route path=":slug" element={<Article props={filterArticles}/>} />
      </Routes>
      <Outlet />
      </div>

     
      
      
      </>
    );
  
  }

  export default Category