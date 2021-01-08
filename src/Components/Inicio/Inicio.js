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
    <div className="card middle">
      <div className={doble === true ? 'front doble' : 'front'}>
        <h3>{infoTarjeta.titulo}</h3>
        {doble === false && <p>{infoTarjeta.informacion}</p>}
        <img src="images/grownow.png" alt="grow-now-logo" />
      </div>
      {doble === true && (
        <div className="back">
          <div className="back-content middle">
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
export default function Contacto() {
  return (
    <>
      <Section className="inicio" id="inicio" to="quieneres">
        <h2>¿En qué podemos ayudarte?</h2>
        <div className="slider">
          <p>Desarrollo de aplicaciones</p>
        </div>
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
