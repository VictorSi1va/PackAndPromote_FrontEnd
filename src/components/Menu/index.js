import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li >
                        <Link to="/">Pack and Promote</Link>
                    </li>
                    <li>
                        <Link to="/como-funciona">Como Funciona</Link>
                        <Link to="/planos">Planos</Link>
                        <Link to="/quem-somos">Quem Somos</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}