import Title from 'components/Title';
import NovaParceriaCard from 'components/NovaParceriaCard';
import './NovaParceria.css';

const NovaParceria = () => {
  const parcerias = [
    { title: 'McDonald\'s', src: '/images/lojas/mc-donalds.png' },
    { title: 'Burger King', src: '/images/lojas/burger-king.png' },
    { title: 'Zé Delivery', src: '/images/lojas/ze-delivery.png' },
    { title: 'Dona Deôla', src: '/images/lojas/dona-deola.png' },
    { title: 'Oggi Sorvetes', src: '/images/lojas/oggi.jpg' },
    { title: 'Tapioca da Gi', src: '/images/lojas/tapioca-da-gi.png' },
    { title: 'Ki-Marmitas', src: '/images/lojas/ki-marmitas.jpeg' }
  ];

  return (
    <div className="novas-parcerias-container">
      <Title titulo="Novas Parcerias"/>

      <div className="novas-parcerias-list">
        {parcerias.map((parceria, index) => (
          <NovaParceriaCard key={index} title={parceria.title} src={parceria.src} />
        ))}
      </div>
    </div>
  );
};

export default NovaParceria;