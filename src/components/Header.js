import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './Header.css'


function Header({ props }) {
  const [title, setTitle] = useState(null);
  const [logo, setLogo] = useState(null);
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    if (!props || props?.length === 0) return;
    setTitle(props[0].fields?.title);
    setLogo(props[0].fields.logo.fields.file.url);
    setNavigation(props[0].fields?.navigation);
  }, [props]);


  function NavItems() {
    if (!navigation || navigation.length === 0) return;
    return navigation.map((navItem, index) => {
      return (
        <li key={index} className='navitem'>
          <Link className='navitem' to={navItem.fields?.slug}>{navItem.fields?.categoryName}</Link>
        </li>
      );
    });
  }

  return (
    <div>
      <header>
      <div className="navbar">
      <img className="logo" src={logo} alt="Bild" />
        <h1 ><Link  className="title" to='/'>{title}</Link></h1>
        {NavItems()}
        </div>
      </header>
      <Outlet />
    </div>
  );
}




export default Header;