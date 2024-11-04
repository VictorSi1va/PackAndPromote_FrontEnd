import "./QuemSomos.css";

export default function QuemSomos() {
    return (
        <div className="quem-somos-page">
            <h1 className="quem-somos-title">Quem Somos</h1>
            <section className="quem-somos-content">
                <p className="quem-somos-text">
                    Somos uma plataforma que conecta lojas e fornecedores em parcerias estratégicas, visando promover marcas de forma sustentável e eficaz. Nossa missão é ajudar negócios a crescerem juntos, oferecendo oportunidades de visibilidade para pequenas e médias empresas, enquanto promovemos práticas ecológicas através de embalagens sustentáveis.
                </p>
                <h2 className="quem-somos-subtitle">Nossa Missão</h2>
                <p className="quem-somos-text">
                    Facilitar conexões entre empresas que valorizam o crescimento sustentável, ajudando-as a expandir seu alcance e a fortalecer suas marcas no mercado.
                </p>
                <h2 className="quem-somos-subtitle">Nossa Visão</h2>
                <p className="quem-somos-text">
                    Ser a principal plataforma de parcerias estratégicas, conhecida por seu compromisso com a sustentabilidade e pela valorização de pequenas e médias empresas.
                </p>
                <h2 className="quem-somos-subtitle">Nossos Valores</h2>
                <ul className="quem-somos-values">
                    <li>Integridade e Transparência</li>
                    <li>Compromisso com a Sustentabilidade</li>
                    <li>Valorização de Pequenos Negócios</li>
                    <li>Inovação e Crescimento Coletivo</li>
                </ul>
            </section>
        </div>
    );
}