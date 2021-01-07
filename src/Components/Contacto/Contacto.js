import { RedSocialInfo, redesSociales } from '../../informacion';
import { useForm } from '../../hooks/useFormulario';
import './Contacto.scss';

export default function Contacto() {
  const [values, handleInputChange] = useForm({
    nombre: '',
    correo: '',
    empresa: '',
    celular: '',
    situacion: '',
  });
  const inputs = [
    {
      data: {
        name: 'nombre',
        placeholder: 'Nombre Completo',
        type: 'text',
        tipoInput: 'input',
        value: values.nombre,
        funcion: handleInputChange,
      },
    },
    {
      data: {
        name: 'correo',
        placeholder: 'Correo Electrónico',
        type: 'email',
        tipoInput: 'input',
        value: values.correo,
        funcion: handleInputChange,
      },
    },
    {
      data: {
        name: 'empresa',
        placeholder: 'Empresa',
        type: 'text',
        tipoInput: 'input',
        value: values.empresa,
        funcion: handleInputChange,
      },
    },
    {
      data: {
        name: 'celular',
        placeholder: 'Número de celular',
        type: 'text',
        tipoInput: 'input',
        value: values.celular,
        funcion: handleInputChange,
      },
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <section className="contacto">
      <div className="titulo">
        <h1>Contactanos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea.
        </p>
      </div>
      <div className="redes">
        <RedSocialInfo red={redesSociales.instagram} />
        <RedSocialInfo red={redesSociales.whatsapp} />
        <RedSocialInfo red={redesSociales.facebook} />
        <RedSocialInfo red={redesSociales.google} />
      </div>
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <h3>¿Estás interesado en nuestros servicios?</h3>
          <div className="formulario-inputs">
            {inputs.map((input) => (
              <Input
                key={input.data.name}
                data={input.data}
                value={input.data.value}
                funcion={input.data.funcion}
              />
            ))}
          </div>
          <Input
            data={{
              name: 'situacion',
              placeholder: 'Escriba su situación',
              tipoInput: 'textarea',
            }}
            value={values.situacion}
            funcion={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="video">
        <p>Video de promoción</p>
      </div>
    </section>
  );
}

function Input({ value, funcion, data }) {
  switch (data.tipoInput) {
    case 'input':
      return (
        <input
          autoComplete="off"
          className="input"
          name={data.name}
          onChange={funcion}
          placeholder={data.placeholder}
          type={data.type}
          value={value}
        />
      );
    case 'textarea':
      return (
        <textarea
          autoComplete="off"
          className="input"
          name={data.name}
          onChange={funcion}
          placeholder={data.placeholder}
          value={value}
        ></textarea>
      );
    default:
      return;
  }
}
