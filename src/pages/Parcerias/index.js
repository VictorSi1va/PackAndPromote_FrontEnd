import NovaParceria from 'components/NovaParceria';
import ParceriaAtual from 'components/ParceriaAtual';
import ParceriaSolicitada from 'components/ParceriaSolicitada';
import ParceriaAprovacao from 'components/ParceriaAprovacao';

import './Parcerias.css';

const Parcerias = () => {
  return (
    <div className='parcerias-geral-container'>
      <NovaParceria />
      <ParceriaAtual />
      <ParceriaSolicitada />
      <ParceriaAprovacao />

      {/* <ParceriaAndamento /> */}
    </div>
  );
};

export default Parcerias;