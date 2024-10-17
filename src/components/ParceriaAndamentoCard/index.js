import React from 'react';
import './ParceriaAndamentoCard.css';

const ParceriaAndamentoCard = ({
    logoSrc,
    title,
    status,
    totalEmbalagens,
    mediaEntregas,
    chartData,
    percentage
}) => {
    return (
        <div className="parceria-andamento-card">
            <div className="parceria-andamento-left">
                <div className="parceria-andamento-header">
                    <img src={logoSrc} alt={title} className="parceria-andamento-logo" />
                    <h3 className="parceria-andamento-title">{title}</h3>
                </div>
                <div className="info-box-parceria-andamento">
                    <p>Status</p>
                    <div className={`parceria-andamento-status ${status.toLowerCase().replace(" ", "-")}`}>{status}</div>
                </div>
                <div className="info-box-parceria-andamento">
                    <p>Total de embalagens</p>
                    <h4>{totalEmbalagens}</h4>
                </div>
                <div className="info-box-parceria-andamento">
                    <p>Média de Entregas por dia</p>
                    <h4>{mediaEntregas}</h4>
                </div>
            </div>

            <div className="parceria-andamento-right">
                <div className="chart-parceria-andamento">
                    <h5>Embalagens Entregues X Mês</h5>
                    <div className="bar-chart-parceria-andamento">{chartData}</div>
                </div>
                <div className="chart-parceria-andamento">
                    <h5>Porcentagem de embalagens entregues</h5>
                    <div className="pie-chart-parceria-andamento">
                        <span>{percentage}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParceriaAndamentoCard;