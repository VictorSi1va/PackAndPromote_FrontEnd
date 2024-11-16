import Parceria from 'components/Parceria';

const ParceriaSolicitada = () => {
  const parceriasSolicitadas = [
    { title: 'Zé Delivery', src: '/images/lojas/ze-delivery.png' },
    { title: 'Oggi Sorvetes', src: '/images/lojas/oggi.jpg' },
  ];

  return <Parceria titulo="Parcerias Solicitadas" parcerias={parceriasSolicitadas} />;
};

export default ParceriaSolicitada;