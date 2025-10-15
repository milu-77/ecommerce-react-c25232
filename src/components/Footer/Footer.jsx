import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>CompuMundoHiperMegaRed</h4>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
             <li><a href="/Productos">Productos</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#"  ><span>📘 Facebook</span></a>
            <a href="#"  ><span>X</span></a>
            <a href="#"  ><span>Instagram</span></a>
            <a href="#"  ><span>LinkedIn</span></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>   CompuMundoHiperMegaRed. Todos los derechos reservados.</p>
      </div>
    </footer>
    
    
    
    
    </>



  )
}

export default Footer