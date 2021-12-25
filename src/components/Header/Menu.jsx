import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


import "./Menu.css"

const Menu = ({ setActive, active }) => {
  const location = useLocation();
  const {
    user: { email },
  } = useAuth();

  const NAV_ITEMS = [
 
    {
      title: "Tickets",
      link: "/products",
      id: 2,
    },
   
  ];
    return (
        <div className={active ? 'menu active': 'menu' } onClick={()=>setActive(false)}>
                <div className="menu-content" onClick={e=>e.stopPropagation()} >
                <div className="navbar-burger">
        {NAV_ITEMS.map((item) => (
          <Link 
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            <a href="" className="btnn">{item.title}</a>
          </Link>
        ))}
        {email === "emir6816@gmail.com" ? (
          <Link 
            className={ 
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            <a href="" className="btnn">Adminka</a>
          </Link>
        ) : null}

      </div>
                </div>
            </div>

    )
    
}
export default Menu;