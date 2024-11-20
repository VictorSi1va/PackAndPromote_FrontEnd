import { Link } from "react-router-dom";
import { useAuthentication } from "context/Authentication";

import "./InfoBanner.css";

function InfoBanner({ titulo, subtitulo, conteudo, imagemUrl, corFundo, corTexto }) {
    const { userLogged } = useAuthentication();

    return (
        <div className="info-banner" style={{ backgroundColor: corFundo, color: corTexto }}>
            <div className="info-banner-content">
                <div className="text-content">
                    <h2 className="info-banner-title">{titulo}</h2>
                    <h3 className="info-banner-subtitle">{subtitulo}</h3>
                    <ul className="info-banner-content-list">
                        {conteudo.map((paragrafo, index) => (
                            <li key={index} className="info-banner-paragraph">{paragrafo}</li>
                        ))}
                    </ul>

                    {
                        userLogged() ? (
                            <Link to="/parcerias">
                                <button className="info-banner-button">
                                    Visualizar Parcerias
                                </button>
                            </Link>
                        ) : (
                            <Link to="/cadastro-loja">
                                <button className="info-banner-button">
                                    Cadastrar Loja
                                </button>
                            </Link>
                        )
                    }
                </div>
                <div className="info-banner-image">
                    <img src={imagemUrl} alt="Info Banner Icon" className="info-banner-image-principal" />
                </div>
            </div>
        </div>
    );
}

export default InfoBanner;