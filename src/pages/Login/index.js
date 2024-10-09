import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-logo-section">
                <img src="/logo.png" alt="Logo" className="login-logo" />
                <h1 className="login-logo-text">pack and promote</h1>
            </div>
            <div className="login-box-section">
                <h2>Login</h2>
                <form>
                    <div className="login-input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite o e-mail" />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Digite a senha" />
                    </div>
                    <Link to="/esqueci-senha" className="login-forgot-password">Esqueci minha senha</Link>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                <Link to="/criar-conta" className="login-create-account">Criar conta</Link>
            </div>
        </div>
    );
}