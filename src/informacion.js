export const infoMenu = {
  quieneres: [
    'Dueño de mi propio negocio',
    'Negociante con experiencia',
    'Negociante que esta empezando',
  ],
  quienessomos: ['Misión', 'Visión', 'Valores'],
  quenecesitas: [
    'Aplicación movil',
    'Aplicación web',
    'Marketing Digital',
    'Branding',
    'Diseño Gráfico',
  ],
};

export const redesSociales = {
  instagram: {
    link: 'https://www.instagram.com/',
    icono: 'fab fa-instagram',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  facebook: {
    link: 'https://www.facebook.com/',
    icono: 'fab fa-facebook',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  whatsapp: {
    link: 'https://www.whatsapp.com/',
    icono: 'fab fa-whatsapp',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  google: {
    link: 'https://www.google.com/',
    icono: 'fab fa-google',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
};

export function InfoMenu({ datos, titulo, clase }) {
  return (
    <div className="menu-oculto-seccion">
      <h3>{titulo}</h3>
      <div className={`menu-oculto-datos ${clase}`}>
        {datos.map((dato, index) => (
          <p className="menu-oculto-dato" key={index}>
            {dato}
          </p>
        ))}
      </div>
    </div>
  );
}

export function RedSocial({ red }) {
  return <i className={red}></i>;
}

export function RedSocialInfo({ red }) {
  return (
    <div className="red-social-contacto">
      <RedSocial red={red.icono} />
      <p>{red.descripcion}</p>
    </div>
  );
}
