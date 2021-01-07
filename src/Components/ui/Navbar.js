import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RedSocial,
  redesSociales,
  InfoMenu,
  infoMenu,
} from '../../informacion';

import './Navbar.scss';
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          <i
            className={!menu ? 'fas fa-bars menu' : 'fas fa-times-circle tache'}
          ></i>
        </div>
        <Link className="logo" to="/">
          <img src="/images/grownow.png" alt="grow-now-logo" />
        </Link>
        <Link className="contacto-link" to="/contacto">
          Conctáctanos
        </Link>
      </nav>
      {menu && (
        <div className="menu-oculto">
          <div className="menu-oculto-header">
            <h2>Menú</h2>
          </div>
          <div className="menu-oculto-body">
            <InfoMenu
              datos={infoMenu.quieneres}
              titulo="¿Quién eres?"
              clase="col"
            />
            <InfoMenu
              datos={infoMenu.quienessomos}
              titulo="¿Quiénes somos?"
              clase="row"
            />
            <InfoMenu
              datos={infoMenu.quenecesitas}
              titulo="¿Quién necesitas?"
              clase="col"
            />
          </div>
          <div className="menu-oculto-footer">
            <RedSocial red={redesSociales.instagram.icono} />
            <RedSocial red={redesSociales.facebook.icono} />
            <RedSocial red={redesSociales.whatsapp.icono} />
          </div>
        </div>
      )}
    </header>
  );
}
