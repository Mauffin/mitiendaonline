import { useState } from 'react';
import '../NavBar/Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const NavBar = () => {
  const [activar, setActivar] = useState(null);

  const handleClick = (categoria, event) => {
    event.preventDefault();
    setActivar(categoria);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MiPrimeraTienda</p>
      </div>
      <ul className="nav-menu">
        <li onClick={(event) => handleClick('tienda', event)}>
          Tienda
          {activar === 'tienda' && <hr />}
        </li>
        <li onClick={(event) => handleClick('hombre', event)}>
          Hombre
          {activar === 'hombre' && <hr />}
        </li>
        <li>Mujer</li>
        <li>Niños</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
      </div>
    </div>
  );
};

export default NavBar;