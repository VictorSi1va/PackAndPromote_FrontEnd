import { Link } from "react-router-dom";
import './Menu.css';

export default function Menu() {
    return (
        <header className="menu-header">
            <nav className="menu-nav">
                <div className="menu-logo">
                    <Link to="/">
                        <img src="/logo-fundo-branco.png" alt="Logo" className="logo-img" />
                    </Link>
                    <Link to="/">pack and promote</Link>
                </div>
                <div className="menu-items-right">
                    <ul className="menu-links">
                        <li><Link to="/como-funciona">Como Funciona</Link></li>
                        <li><Link to="/planos">Planos</Link></li>
                        <li><Link to="/quem-somos">Quem Somos</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                    <div className="menu-login">
                        <Link to="/login">Entrar</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
