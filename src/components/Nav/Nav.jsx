import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext.js";
import DropdownCategorias from "../DropdownCategorias/DropdownCategorias.jsx";

const Nav = () => {
  const { getTotalItems } = useCartContext();
  return (
    <>
      <nav className="navbar">
        
        <div className="nav-container">
           <ul className="nav-menu"> 
        <li className="nav-item">
              <Link to="/admin" className="nav-link admin-button">
                admin
              </Link>
            </li>
          </ul>

          <a to="/" className="nav-logo">
            Sector 7G 
          </a>
         
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Categorias
              </Link>
            </li>
            <DropdownCategorias> </DropdownCategorias>

            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">
                Ofertas
              </Link>
            </li>
 
          </ul>
          <div className="nav-actions">
            <Link to="/carrito" className="cart-button">
              Carrito
              {getTotalItems() > 0 && (
                <span className="in-cart">({getTotalItems()})</span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
