import { Link } from "react-router-dom";
import { useState } from "react";
import './Menu.css';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="menu-header">
            <nav className="menu-nav">
                <div className="menu-logo">
                    <Link to="/">
                        <img src="/logo-fundo-branco.png" alt="Logo" className="logo-img" />
                    </Link>
                    <Link to="/">pack and promote</Link>
                </div>
                
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <div className={`menu-items-right ${menuOpen ? "menu-open" : ""}`}>
                    <ul className="menu-links">
                        {/* <li><Link to="/parcerias">Parcerias</Link></li> */}
                        <li><Link to="/cadastro-loja">Cadastrar Loja</Link></li>
                        <li><Link to="/planos">Planos</Link></li>
                        <li><Link to="/como-funciona">Como Funciona</Link></li>
                        <li><Link to="/quem-somos">Quem Somos</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                    <div className="menu-login">
                        {/* <Link to="/minha-conta">Minha Conta</Link> */}
                        <Link to="/login">Entrar</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}