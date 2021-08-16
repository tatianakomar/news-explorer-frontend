import './HeaderNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../images/header-nav_menu.svg';

function HeaderNav({ isLoggedIn, openPopup, isHome }) {
const [headerMobile, setHeaderMobile] = React.useState(false);
let headerClasses = 'header-nav';
if(!isHome){
  headerClasses += ` header-nav_theme_light`
}

if(headerMobile){
  headerClasses += ' header-nav_mobile'
}

  return (
    <nav className={headerClasses}>
      <NavLink className="header-nav__title" to="/">
        NewsExplorer
      </NavLink>
      <img className="header-nav__menu" src={menu} alt="navigation menu" onClick={()=>{setHeaderMobile(true)}}></img>
      <button className="header-nav__close" type="button" aria-label="Close navigation" onClick={()=>{setHeaderMobile(false)}}></button>
      <ul className="header-nav__items">
        <li>
          <NavLink className={`header-nav__link${isHome ? " header-nav__link_active" : ""}`} to="/">
            Home
          </NavLink>
        </li>
        {!isLoggedIn && <li>
          <button className="header-nav__button header-nav__button_signin" type="button"
          aria-label="signin" onClick = {openPopup}>
            Sign in
          </button>
        </li>}
        { isLoggedIn && 
        <>
        <li>
          <NavLink className={`header-nav__link${!isHome ? " header-nav__link_active" : ""}`} to="/saved-news">
            Saved articles
          </NavLink>
        </li>
        <li>
          <button className="header-nav__button header-nav__button_logout" type="button" aria-label="logout">
            Tanya
            <svg className="header-nav__logout" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z" fill="white"/>
            </svg>
          </button>
        </li>
        </>}
      </ul>
    </nav>
  );
}

export default HeaderNav;
