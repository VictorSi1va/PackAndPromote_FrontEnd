import ParceriaAndamentoCard from 'components/ParceriaAndamentoCard';
import Title from 'components/Title';

const ParceriaAndamento = () => {
  return (
    <div>
      <Title titulo="Parcerias em Andamento"/>
      
      <ParceriaAndamentoCard
        logoSrc="images/lojas/mc-donalds.png"
        title="McDonald's"
        status="ATIVA"
        totalEmbalagens="5687"
        mediaEntregas="78"
        chartData="Bar Chart Data" 
        percentage="80"
      />

      <ParceriaAndamentoCard
        logoSrc="images/lojas/ze-delivery.png"
        title="Zé Delivery"
        status="EM PAUSA"
        totalEmbalagens="4789"
        mediaEntregas="67"
        chartData="Bar Chart Data"
        percentage="75"
      />
    </div>
  );
};

export default ParceriaAndamento;