import Title from 'components/Title';
import ParceriaCard from 'components/ParceriaCard';

import './Parceria.css';

const Parceria = ({ titulo, parcerias, loading, error, tipoParceria }) => {
  return (
    <div className="parcerias-container">
      <Title titulo={titulo} />

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="parcerias-list">
          {parcerias && parcerias.length > 0 ? (
            parcerias.map((parceria, index) => (
              <ParceriaCard key={index}
                idLojaPromoter={parceria.idLojaPromoter}
                title={parceria.title} 
                src={parceria.src}
                tipoParceria={tipoParceria}
              />
            ))
          ) : (
            <p className="no-parcerias">Nenhuma parceria disponível no momento.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Parceria;