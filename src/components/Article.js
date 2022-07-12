import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import './article.css'


function Article({props}) {
  const { slug } = useParams();

  if (!props || props?.length === 0) return;
  const filterArticles = props.filter(article => {
    console.log(article);
      //return article[0].fields?.slug === slug
  })

  console.log(filterArticles);
  
  return (
    <div className="cardWrapper">
   
    </div>
  );
}




export default Article;