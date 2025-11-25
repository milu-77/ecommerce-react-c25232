import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./DropdownCategorias.css"

const DropdownCategorias = () => {
   
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    // 2. Contenedor principal del desplegable
    <li className="nav-item dropdown-custom">
      
      {/* 3. El activador (Toggle) */}
      <Link 
        to="/"  
        className="nav-link dropdown-toggle-custom"
        onClick={toggleDropdown}  
      >
        Categorías
      </Link>
      
      
      {isDropdownOpen && (
        <ul className="dropdown-menu-custom">
          <li className='list-categories'>
            <Link to="/category/ciencia-ficcion" className="dropdown-item-custom" onClick={toggleDropdown}>
              Clasicos Sci-Fi
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/cyberpunk" className="dropdown-item-custom" onClick={toggleDropdown}>
              Cyberpunk
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/ciencia-ficcion-humor" className="dropdown-item-custom" onClick={toggleDropdown}>
               Humor
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/ciencia-ficcion-filosofica" className="dropdown-item-custom" onClick={toggleDropdown}>
               Filosofica
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/space-opera" className="dropdown-item-custom" onClick={toggleDropdown}>
              Space Opera
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/militar" className="dropdown-item-custom" onClick={toggleDropdown}>
              Militar
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/historia-alternativa" className="dropdown-item-custom" onClick={toggleDropdown}>
              Historia Alternativa
            </Link>
          </li>
          <li className='list-categories'>
            <Link to="/category/ciencia-ficcion-social" className="dropdown-item-custom" onClick={toggleDropdown}>
              Social
            </Link>
          </li>
        </ul>
      )}
      
    </li>
  );
};

export default DropdownCategorias;