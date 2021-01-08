import './Aplicaciones.scss';
import Grid from './Grid';
import { aplicaciones, movil, web } from '../../informacion';

function ApplicacionesScreen({ data, apps, tipo, nombre }) {
  return (
    <div className="aplicaciones">
      <div className="encabezado">
        <h1>{data.titulo}</h1>
        <p>{data.definicion}</p>
      </div>
      <div className="ventajas">
        <h2>{data.subtitulo}</h2>
        <ul>
          {data.ventajas.map((ventaja) => (
            <li>{ventaja}</li>
          ))}
        </ul>
      </div>
      <div className="imagen">
        <img src={data.imagen} alt={data.titulo} />
      </div>
      <Grid items={apps} tipo={tipo} nombre={nombre} />
    </div>
  );
}

export default function Aplicaciones(props) {
  const tipo = props.match.params.nombre;
  switch (tipo) {
    case 'web':
      return (
        <ApplicacionesScreen
          data={web}
          tipo={tipo}
          apps={aplicaciones}
          nombre="Nombre de la Web"
        />
      );
    case 'movil':
      return (
        <ApplicacionesScreen
          data={movil}
          tipo={tipo}
          apps={aplicaciones}
          nombre="Nombre de la Aplicación"
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
