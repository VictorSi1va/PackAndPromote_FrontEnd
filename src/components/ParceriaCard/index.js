import { Link } from 'react-router-dom';
import './ParceriaCard.css';

const ParceriaCard = ({ title, src }) => {
  return (
    <Link to="/solicitar-parceria/1">
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