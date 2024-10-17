import ParceriaAndamentoCard from 'components/ParceriaAndamentoCard';
import Title from 'components/Title';

const ParceriaAndamento = () => {
  return (
    <div>
      <Title titulo="Parcerias em Andamento"/>
      
      <ParceriaAndamentoCard
        logoSrc="images/mc-donalds.png"
        title="McDonald's"
        status="ATIVA"
        totalEmbalagens="6969"
        mediaEntregas="69"
        chartData="Bar Chart Data" 
        percentage="69"
      />

      <ParceriaAndamentoCard
        logoSrc="images/ze-delivery.png"
        title="Zé Delivery"
        status="EM PAUSA"
        totalEmbalagens="6969"
        mediaEntregas="69"
        chartData="Bar Chart Data"
        percentage="69"
      />
    </div>
  );
};

export default ParceriaAndamento;