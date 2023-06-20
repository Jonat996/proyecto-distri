import './navbar.styles.css';

export const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <div className="company-brand">
        <img src="./soportic_logo.svg" className="soportic-logo" alt="img" />
        <img src="./soportic.svg" className="soportic-name" alt=""/>
      </div>
      <ol className="navbar-list">
        <li className="navbar-list-item">
          <a href="#quienes-somos">¿Quiénes somos?</a>
        </li>
        <li className="navbar-list-item">
          <a href="#servicios">Servicios</a>
        </li>
        <li className="navbar-list-item">
          <a href="#contacto">Contacto</a>
        </li>
      </ol>
    </div>
  );
};
