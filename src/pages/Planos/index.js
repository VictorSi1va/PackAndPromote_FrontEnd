import { Link } from "react-router-dom";
import { useAuthentication } from "context/Authentication";
import Button from "components/Button";

import "./Planos.css";

export default function Planos() {
    const { userLogged } = useAuthentication();

    const planos = [
        {
            nome: "Plano Básico",
            preco: "Gratuito",
            beneficios: [
                "Cadastro da sua loja na plataforma",
                "Acesso às parcerias locais",
                "Análise de visibilidade mensal"
            ],
            corFundo: "plano-basico"
        },
        {
            nome: "Plano Profissional",
            preco: "R$ 49,90/mês",
            beneficios: [
                "Todos os benefícios do Plano Básico",
                "Relatórios personalizados de impacto",
                "Anúncios prioritários nas embalagens"
            ],
            corFundo: "plano-profissional"
        },
        {
            nome: "Plano Premium",
            preco: "R$ 99,90/mês",
            beneficios: [
                "Todos os benefícios do Plano Profissional",
                "Consultoria de marketing para parcerias",
                "Suporte dedicado 24/7",
                "Relatório detalhado de ROI"
            ],
            corFundo: "plano-premium"
        }
    ];

    return (
        <div className="planos-page">
            <h1 className="planos-title">Nossos Planos</h1>
            <div className="planos-content">
                {planos.map((plano, index) => (
                    <div key={index} className={`plano-card ${plano.corFundo}`}>
                        <h2 className="plano-nome">{plano.nome}</h2>
                        <p className="plano-preco">{plano.preco}</p>
                        <ul className="plano-beneficios">
                            {plano.beneficios.map((beneficio, idx) => (
                                <li key={idx} className="plano-beneficio">{beneficio}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {
                userLogged() ?
                    (
                        <Link to="/minha-conta">
                            <Button label="Alterar Plano" />
                        </Link>
                    ) : (
                        <Link to="/cadastro-loja">
                            <Button label="Cadastrar Loja" />
                        </Link>
                    )
            }
        </div>
    );
}