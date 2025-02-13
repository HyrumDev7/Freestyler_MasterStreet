import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Sección Principal */}
        <div className="footer-sections">
          {/* Columna 1: Información */}
          <div className="footer-column">
            <h3>Master Street</h3>
            <p>Av. Gran Santiago, Chile</p>
            <p>
              <a href="mailto:correo@masterstreet.cl">correo@masterstreet.cl</a>
            </p>
          </div>

          {/* Columna 2: Servicio al consumidor */}
          <div className="footer-column">
            <h4>Servicio al consumidor</h4>
            <ul>
              <li>
                <a
                  href="https://www.masterstreet.cl/centro-de-ayuda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/terminos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Términos
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/registro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Regístrate
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/crear-cuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crear cuenta
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/retiro-en-tienda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retiro en tienda
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/contacto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a
                  href="https://www.masterstreet.cl/privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Políticas de privacidad
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/terminos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/despacho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Políticas de despacho
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/cambios-devoluciones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cambios y devoluciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Cuenta */}
          <div className="footer-column">
            <h4>Cuenta</h4>
            <ul>
              <li>
                <a
                  href="https://www.masterstreet.cl/mi-cuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi cuenta
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/seguimiento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sigue tu compra
                </a>
              </li>
              <li>
                <a
                  href="https://www.masterstreet.cl/ver-boleta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver boleta
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 5: Redes Sociales */}
          <div className="footer-column">
            <h4>Redes Sociales</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/themasterstreet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573100460180"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@masterstreet.cl?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tik-Tok
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FMasterStreetcl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/master-street/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de derechos reservados */}
        <div className="footer-bottom">
          <p>© 2025 The Master Street. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
