import { RedSocial } from '../../informacion';
import { redesSociales } from '../../informacion';
import './Footer.scss';
export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="redes-sociales-footer">
          <div className="instagram">
            <RedSocial red={redesSociales.instagram.icono} />
            <p>Instagram</p>
          </div>
          <div className="whatsapp">
            <RedSocial red={redesSociales.whatsapp.icono} />
            <p>Whatsapp</p>
          </div>
          <div className="facebook">
            <RedSocial red={redesSociales.facebook.icono} />
            <p>Facebook</p>
          </div>
        </div>
        <div className="info-normas">
          <p>Terminos y condiciones</p>
          <p>Políticas de privacidad</p>
        </div>
        <div className="info-footer">
          <p>example@grownow.com</p>
          <p>Lima, Perú</p>
        </div>
      </footer>
    </div>
  );
}
