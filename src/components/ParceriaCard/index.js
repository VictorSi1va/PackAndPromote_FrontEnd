import { Link } from 'react-router-dom';
import './ParceriaCard.css';

const ParceriaCard = ({ idLojaPromoter, title, src, tipoParceria }) => {
  let linkTo;

  switch (tipoParceria) {
    case 'NovaParceria':
      linkTo = `/solicitar-parceria/${idLojaPromoter}`;
      break;
    case 'AprovacaoParceria':
      linkTo = `/aprovar-parceria/${idLojaPromoter}`;
      break;
    case 'ParceriaSolicitada':
      linkTo = `/detalhes-parceria/${idLojaPromoter}`;
      break;
    default:
      linkTo = `/detalhes-parceria/${idLojaPromoter}`;
  }

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