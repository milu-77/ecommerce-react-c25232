import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext/useCartContext'  
  
const Nav = () => {
    const {getTotalItems} = useCartContext()
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a to="/" className="nav-logo">
            CompuMundoHiperMegaRed
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">
                Ofertas
              </Link>
            </li>             
          </ul>

          {/* Botón de carrito */}
          <div className="nav-actions"> 
            <button className="cart-button">Carrito  
            {getTotalItems() > 0 && <span className="in-cart">( {getTotalItems() })</span>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
