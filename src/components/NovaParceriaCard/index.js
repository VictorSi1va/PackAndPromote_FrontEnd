import './NovaParceriaCard.css';

const NovaParceriaCard = ({ title, src }) => {
  return (
    <div className="nova-parceria-card">
      <div className="logo-container">
        <img src={src} alt={title} className="nova-parceria-logo" />
      </div>
      <p className="nova-parceria-title">{title}</p>
    </div>
  );
};

export default NovaParceriaCard;