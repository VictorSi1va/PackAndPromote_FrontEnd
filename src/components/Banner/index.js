import "./Banner.css";

function Banner({ titulo, subtitulo, conteudo, imagemUrlPrincipal, imagemUrlSecundaria, corFundo, corTexto }) {
    return (
        <div className="banner" style={{ backgroundColor: corFundo, color: corTexto }}>
            <h1 className="banner-main-title">Como funciona</h1>
            <div className="banner-content">
                <div className="text-content">
                    <h2 className="banner-title">{titulo}</h2>
                    <h3 className="banner-subtitle">{subtitulo}</h3>
                    <ul className="banner-content-list">
                        {conteudo.map((paragrafo, index) => (
                            <li key={index} className="banner-paragraph">{paragrafo}</li>
                        ))}
                    </ul>
                </div>
                <div className="banner-image">
                    <img src={imagemUrlPrincipal} alt="Principal Icon" className="image-principal" />
                    <img src={imagemUrlSecundaria} alt="Secundaria Icon" className="image-secundaria" />
                </div>
            </div>
        </div>
    );
}

export default Banner;