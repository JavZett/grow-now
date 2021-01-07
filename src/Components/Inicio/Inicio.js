import { useRouteMatch } from 'react-router-dom';
import { Link as TabLink } from 'react-scroll';
import './Inicio.scss';
function Section({ children, id, to, last = false }) {
  return (
    <section className="inicio" id={id}>
      {children}
      <TabLink
        to={to}
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
        className="TabLink"
      >
        <i class={last === false ? 'fas fa-caret-down' : 'fas fa-caret-up'}></i>
      </TabLink>
    </section>
  );
}
export default function Contacto() {
  const { path } = useRouteMatch();
  console.log(path);
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
          
        </div>
      </Section>
      <Section className="inicio" id="quienessomos" to="quienestrabajamos">
        <h2>¿Quién somos?</h2>
      </Section>
      <Section
        className="inicio"
        id="quienestrabajamos"
        to="inicio"
        last={true}
      >
        <h2>¿Quién somos?</h2>
      </Section>
    </>
  );
}
