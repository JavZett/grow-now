import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as TabLink } from 'react-scroll';
import {
  RedSocial,
  quieneresTarjeta,
  quienessomosTarjeta,
} from '../../informacion';
import './Inicio.scss';
function Section({ children, id, to, azul = false, last = false }) {
  return (
    <section className={azul === true ? 'inicio azul' : 'inicio'} id={id}>
      {children}
      <TabLink
        to={to}
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
        className="TabLink"
      >
        <i
          className={last === false ? 'fas fa-caret-down' : 'fas fa-caret-up'}
        ></i>
      </TabLink>
    </section>
  );
}
function Tarjeta({ infoTarjeta, doble }) {
  return (
    <div className="card">
      <div className={doble === true ? 'front doble' : 'front'}>
        <h3>{infoTarjeta.titulo}</h3>
        {doble === false && <p>{infoTarjeta.informacion}</p>}
        <img src="images/grownow.png" alt="grow-now-logo" />
      </div>
      {doble === true && (
        <div className="back">
          <div className="back-content">
            <h3>{infoTarjeta.titulo}</h3>
            <p>{infoTarjeta.informacion}</p>
            <TabLink
              to="inicio"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              className="tarjeta-necesidad"
            >
              ¿Ya sabes qué necesitas?
            </TabLink>
            <Link to="/contacto" className="tarjeta-contacto">
              <RedSocial red="fab fa-whatsapp" />
              <span>Conctáctanos</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
function Preview({ nombre, id, clase }) {
  const Nombre = nombre
    .replace(' ', '-')
    .toLowerCase()
    .replace('á', 'a')
    .replace('ó', 'o');
  return (
    <div className={`servicio-slider ${Nombre}`}>
      <h3 id={id} className={clase}>
        {nombre}
      </h3>
    </div>
  );
}
function Servicio({ servicio, id }) {
  return (
    <div id={`servicio-${id}`} className="servicio">
      <div className="servicio-texto">
        <h4>{servicio}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugiat
          soluta reiciendis quia, necessitatibus quaerat sunt mollitia, vitae
          animi distinctio ea quae, incidunt sit! Molestias non cum tempore
          accusantium tenetur.
        </p>
      </div>
      <div className="servicio-imagen">
        <img src="/images/android.png" alt={servicio} />
      </div>
    </div>
  );
}
function Slider() {
  return (
    <div className="slider">
      <div className="conjunto">
        <Servicio servicio="Marketing Digital" id="marketing-digital" />
        <Servicio servicio="Diseño Gráfico" id="diseño" />
        <Servicio servicio="Branding" id="branding" />
        <Servicio servicio="Aplicaciones Web" id="web" />
        <Servicio servicio="Aplicaciones Móviles" id="app" />
        <div className="servicios-slider">
          <Preview
            nombre="Marketing Digital"
            clase="marketing servicio-btn"
            id="marketing"
          />
          <Preview nombre="Páginas Web" clase="web servicio-btn" id="web" />
          <Preview
            nombre="Aplicaciones Móviles"
            clase="apps servicio-btn"
            id="apps"
          />
          <Preview
            nombre="Branding"
            clase="branding servicio-btn"
            id="branding"
          />
          <Preview
            nombre="Diseño Gráfico"
            clase="diseño servicio-btn"
            id="diseño"
          />
        </div>
      </div>
    </div>
  );
}
export default function Contacto() {
  let timer;
  const agregarEvento = (elemento, servicio) => {
    servicio.addEventListener('mouseenter', () => {
      elemento.classList.add('servicio-activo');
    });
    servicio.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        elemento.classList.remove('servicio-activo');
      }, 200);
    });
    elemento.addEventListener('mouseenter', () => clearTimeout(timer));
    elemento.addEventListener('mouseleave', () => {
      elemento.classList.remove('servicio-activo');
    });
  };
  useEffect(() => {
    const servicios = {
      web: document.querySelector('#servicio-web'),
      movil: document.querySelector('#servicio-app'),
      branding: document.querySelector('#servicio-branding'),
      grafico: document.querySelector('#servicio-diseño'),
      marketing: document.querySelector('#servicio-marketing-digital'),
    };
    const serviciosA = document.querySelectorAll('.servicio-btn');
    serviciosA.forEach((servicio) => {
      switch (servicio.id) {
        case 'marketing':
          agregarEvento(servicios.marketing, servicio);
          break;
        case 'web':
          agregarEvento(servicios.web, servicio);
          break;
        case 'apps':
          agregarEvento(servicios.movil, servicio);
          break;
        case 'branding':
          agregarEvento(servicios.branding, servicio);
          break;
        case 'diseño':
          agregarEvento(servicios.grafico, servicio);
          break;
      }
    });
  }, []);
  return (
    <>
      <Section className="inicio" id="inicio" to="quieneres">
        <Slider />
      </Section>
      <Section className="inicio" id="quieneres" to="quienessomos">
        <h2>¿Quién eres?</h2>
        <div className="tarjetas">
          {quieneresTarjeta.map((tarjeta, i) => (
            <Tarjeta infoTarjeta={tarjeta} doble={true} key={i} />
          ))}
        </div>
      </Section>
      <Section className="inicio" id="quienessomos" to="quienestrabajamos">
        <h2>¿Quién somos?</h2>
        <div className="tarjetas">
          {quienessomosTarjeta.map((tarjeta, i) => (
            <Tarjeta infoTarjeta={tarjeta} doble={false} key={i} />
          ))}
        </div>
      </Section>
      <Section
        className="inicio"
        id="quienestrabajamos"
        to="inicio"
        last={true}
        azul={true}
      >
        <h2 className="azul">¿Con quienes hemos trabajado?</h2>
        <div className="logos-clientes">
          <p>Logos de clientes que direccionen sus páginas</p>
        </div>
      </Section>
    </>
  );
}
