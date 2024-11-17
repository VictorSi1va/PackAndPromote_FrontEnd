import { Link } from 'react-router-dom';
import './ParceriaCard.css';

const ParceriaCard = ({ idLojaPromoter, title, src, tipoParceria }) => {
  const linkTo =
  tipoParceria === 'NovaParceria'
    ? `/solicitar-parceria/${idLojaPromoter}`
    : `/detalhes-parceria/${idLojaPromoter}`;

  return (
    <Link to={linkTo}>
      <div className="parceria-card">
        <div className="logo-container">
          <img src={src} alt={title} className="parceria-logo" />
        </div>
        <p className="parceria-title">{title}</p>
      </div>
    </Link>
  );
};

export default ParceriaCard;