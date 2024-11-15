import NovaParceria from 'components/NovaParceria';
import ParceriaAndamento from 'components/ParceriaAndamento';

import './Parcerias.css';

const Parcerias = () => {
  const parcerias = [
    { title: 'McDonald\'s', src: '/images/mc-donalds.png' },
    { title: 'Burger King', src: '/images/burger-king.png' },
    { title: 'Zé Delivery', src: '/images/ze-delivery.png' },
    { title: 'Dona Deôla', src: '/images/dona-deola.png' },
    { title: 'Oggi Sorvetes', src: '/images/oggi.jpg' },
    { title: 'Tapioca da Gi', src: '/images/tapioca-da-gi.png' },
    { title: 'Ki-Marmitas', src: '/images/ki-marmitas.jpeg' }
  ];

  return (
    <div>
      <NovaParceria />

      {/* <ParceriaAndamento /> */}
    </div>
  );
};

export default Parcerias;