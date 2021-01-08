import { aplicaciones, branding, grafico, marketing } from '../../informacion';
import Grid from '../Aplicaciones/Grid';
import './Servicos.scss';
function ServiciosScreen({ data, apps, tipo, nombre }) {
  return (
    <div className="servicios">
      <div className="encabezado">
        <h1>{data.titulo}</h1>
        <p>{data.definicion}</p>
      </div>
      <Grid items={apps} tipo={tipo} nombre={nombre} />
    </div>
  );
}

export default function Servicios(props) {
  const tipo = props.match.params.nombre;
  switch (tipo) {
    case 'branding':
      return (
        <ServiciosScreen
          data={branding}
          tipo={tipo}
          apps={aplicaciones}
          nombre="Branding"
        />
      );
    case 'marketing-digital':
      return (
        <ServiciosScreen
          data={marketing}
          tipo={tipo}
          apps={aplicaciones}
          nombre="Nombre de la campaña"
        />
      );
    case 'diseño-grafico':
      return (
        <ServiciosScreen
          data={grafico}
          tipo={tipo}
          apps={aplicaciones}
          nombre="Ilustraciones"
        />
      );
    default:
      return (
        <div className="not-found">
          <p>Página no encontrada</p>
        </div>
      );
  }
}
