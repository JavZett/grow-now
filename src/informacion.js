import { Link } from 'react-router-dom';
import { Link as TabLink } from 'react-scroll';
export const infoMenu = {
  quieneres: [
    { link: '/', nombre: 'Dueño de mi propio negocio' },
    { link: '/', nombre: 'Negociante con experiencia' },
    { link: '/', nombre: 'Negociante que esta empezando' },
  ],
  quienessomos: [
    { link: '/', nombre: 'Misión' },
    { link: '/', nombre: 'Visión' },
    { link: '/', nombre: 'Valores' },
  ],
  quenecesitas: [
    { link: '/aplicaciones/movil', nombre: 'Aplicación movil' },
    { link: '/aplicaciones/web', nombre: 'Aplicación web' },
    { link: '/servicios/marketing-digital', nombre: 'Marketing Digital' },
    { link: '/servicios/branding', nombre: 'Branding' },
    { link: '/servicios/diseño-grafico', nombre: 'Diseño Gráfico' },
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

export const quieneresTarjeta = [
  {
    titulo: 'Negociante que empieza',
    informacion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque
    quod. Iusto, deserunt amet aliquam error nisi quidem perspiciatis,
    repellendus quibusdam illo obcaecati modi eos tenetur nobis? Pariatur,
    officiis quibusdam!`,
  },
  {
    titulo: 'Negociante con experiencia',
    informacion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque
    quod. Iusto, deserunt amet aliquam error nisi quidem perspiciatis,
    repellendus quibusdam illo obcaecati modi eos tenetur nobis? Pariatur,
    officiis quibusdam!`,
  },
  {
    titulo: 'Dueño de mi empresa',
    informacion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque
    quod. Iusto, deserunt amet aliquam error nisi quidem perspiciatis,
    repellendus quibusdam illo obcaecati modi eos tenetur nobis? Pariatur,
    officiis quibusdam!`,
  },
];

export const quienessomosTarjeta = [
  {
    titulo: 'Misión',
    informacion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae ex.
    Est nihil assumenda architecto iste aliquid inventore minus
    reprehenderit nam accusantium ipsa, provident, impedit quas quae magnam?
    Voluptates, porro.`,
  },
  {
    titulo: 'Visión',
    informacion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae ex.
    Est nihil assumenda architecto iste aliquid inventore minus
    reprehenderit nam accusantium ipsa, provident, impedit quas quae magnam?
    Voluptates, porro.`,
  },
  {
    titulo: 'Valores',
    informacion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae ex.
    Est nihil assumenda architecto iste aliquid inventore minus
    reprehenderit nam accusantium ipsa, provident, impedit quas quae magnam?
    Voluptates, porro.`,
  },
];

export const aplicaciones = [
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '15',
    hearts: '108',
  },
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '5',
    hearts: '102',
  },
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '10',
    hearts: '100',
  },
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '18',
    hearts: '103',
  },
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '11',
    hearts: '90',
  },
  {
    nombre: 'Nombre de la Aplicación',
    imagen: '/images/grownow.png',
    coments: '10',
    hearts: '178',
  },
];

export const movil = {
  titulo: 'Aplicaciones móviles',
  definicion: `Una aplicación móvil es un programa que usted puede descargar y al que puede acceder directamente desde su teléfono o desde algún otro aparato móvil – como por ejemplo una tablet o un reproductor MP3.`,
  imagen: '/images/aplicacion-movil.png',
  subtitulo: 'Ventajas de las aplicaciones móviles',
  ventajas: [
    `Los usuarios pueden acceder directamente a los servicios de una empresa a través de una aplicación móvil. Al mismo tiempo, la empresa puede ofrecer atención personalizada, basada en métricas y datos, de forma inmediata.`,
    `Las aplicaciones se centran en funciones específicas, maximizando la utilidad. Esto, junto al alto nivel de personalización que pueden alcanzar, hace que los usuarios se acomoden fácilmente a ellas y las incluyan en sus rutinas.`,
  ],
};
export const web = {
  titulo: 'Aplicaciones web',
  definicion: `Las aplicaciones web reciben este nombre porque se ejecutan en internet. Es decir que los datos o los archivos en los que trabajas son procesados y almacenados dentro de la web. Estas aplicaciones, por lo general, no necesitan ser instaladas en tu computador.`,
  imagen: '/images/aplicacion-web.png',
  subtitulo: 'Ventajas de las aplicaciones web',
  ventajas: [
    `Menos Bugs. Las aplicaciones basadas en web deberán ser menos propensas a colgarse y crear problemas técnicos debido a software o conflictos de hardware con otras aplicaciones existentes, protocolos o software personal interno. Con aplicaciones basadas en web, todos utilizan la misma versión, y todos los bugs pueden ser corregidos tan pronto como son descubiertos.`,
    `Múltiples usuarios concurrentes. Las aplicaciones basadas en web pueden realmente ser utilizada por múltiples usuarios al mismo tiempo.`,
  ],
};

export const branding = {
  titulo: 'Branding',
  definicion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `,
};
export const grafico = {
  titulo: 'Diseño Gráfico',
  definicion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `,
};
export const marketing = {
  titulo: 'Marketing Digital',
  definicion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `,
};

export function InfoMenu({ datos, titulo, clase, to }) {
  return (
    <div className="menu-oculto-seccion">
      <TabLink
        to={to}
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
        className="h3-link"
      >
        <h3>{titulo}</h3>
      </TabLink>
      <div className={`menu-oculto-datos ${clase}`}>
        {datos.map((dato, index) => (
          <Link to={dato.link} className="menu-oculto-dato" key={index}>
            {dato.nombre}
          </Link>
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
