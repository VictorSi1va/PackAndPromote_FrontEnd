import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "context/Authentication";
import './Menu.css';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { userLogged, signOut } = useAuthentication();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        signOut();
        setMenuOpen(false);
        navigate("/");
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
                        {userLogged() ? (
                            <li><Link to="/parcerias">Parcerias</Link></li>
                        ) : (
                            <>
                                <li><Link to="/cadastro-loja">Cadastrar Loja</Link></li>
                                <li><Link to="/planos">Planos</Link></li>
                                <li><Link to="/como-funciona">Como Funciona</Link></li>
                            </>
                        )}

                        <li><Link to="/quem-somos">Quem Somos</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>

                        {userLogged() && (
                            <Link to="/minha-conta">Minha Conta</Link>
                        )}
                    </ul>
                    <div className="menu-login">
                        {userLogged() ? (
                            <button className="menu-login" onClick={handleLogout}>Sair</button>
                        ) : (
                            <Link to="/login">Entrar</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}