import "./card.css"
import { Link } from "react-router-dom";

function Cards({ props }) {
return (
    <>
    <div className="cardWrapper">
   {(props || props?.length !== 0).map(article => {
       return (
        <Link to={article.fields.slug}>
        <div className="card">
        <img className="cardImg" src={article.fields?.images[0]?.fields.file.url} alt={article.fields?.images[0]?.fields.title} />
       <p className="cardHeading">{article.fields?.title}</p>
       </div>
       </Link>
       )
    })       
    }
    </div>
    </>
)
}
    
     
export default Cards;