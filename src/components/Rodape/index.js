import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './Rodape.css';

export default function Rodape() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4><Link to="/">Pack and Promote</Link></h4>
                    <ul>
                        <li><Link to="/portal-parceiro">Portal do Parceiro</Link></li>
                        <li><Link to="/blog-parceiros">Blog para Parceiros</Link></li>
                        <li><Link to="/carreiras">Carreiras no Pack and Promote</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Descubra</h4>
                    <ul>
                        <li><Link to="/cadastro-loja">Cadastre sua loja</Link></li>
                        <li><Link to="/cadastro-loja">Cadastre sua loja (delivery)</Link></li>
                        <li><Link to="/cadastro-loja">Cadastre sua fábrica</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Saiba mais</h4>
                    <ul>
                        <li><Link to="/privacidade">Privacidade</Link></li>
                        <li><Link to="/codigo-conduta">Código de conduta</Link></li>
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
