import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useAuthentication } from "context/Authentication";
import { Link } from "react-router-dom";

import './Rodape.css';

export default function Rodape() {
    const { userLogged } = useAuthentication();

    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4><Link to="/">Pack and Promote</Link></h4>
                    <ul>
                        {
                            !userLogged() &&
                            <li><Link to="/cadastro-loja">Cadastre sua loja</Link></li>
                        }
                        <li><Link to="/planos">Planos</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Descubra</h4>
                    <ul>
                        <li><Link to="/como-funciona">Como Funciona</Link></li>
                        <li><Link to="/quem-somos">Quem Somos</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Saiba mais</h4>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; Copyright 2024 - Pack and Promote - Todos os direitos reservados</p>
                <p>CNPJ 12.345.678/0001-23 / Estrada dos Alvarengas, 4001, São Bernardo do Campo</p>
                <div className="footer-social">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    );
}