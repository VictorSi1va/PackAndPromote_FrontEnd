import Title from 'components/Title';
import ParceriaCard from 'components/ParceriaCard';

import './Parceria.css';

const Parceria = ({ titulo, parcerias }) => {
  return (
    <div className="parcerias-container">
      <Title titulo={titulo} />

      <div className="parcerias-list">
        {parcerias && parcerias.length > 0 ? (
          parcerias.map((parceria, index) => (
            <ParceriaCard key={index} title={parceria.title} src={parceria.src} />
          ))
        ) : (
          <p className="no-parcerias">Nenhuma parceria disponível no momento.</p>
        )}
      </div>
    </div>
  );
};

export default Parceria;