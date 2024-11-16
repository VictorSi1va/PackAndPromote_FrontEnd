import Parceria from 'components/Parceria';

const NovaParceria = () => {
  const novasParcerias = [
    { title: 'McDonald\'s', src: '/images/lojas/mc-donalds.png' },
    { title: 'Burger King', src: '/images/lojas/burger-king.png' },
    { title: 'Dona Deôla', src: '/images/lojas/dona-deola.png' },
    { title: 'Tapioca da Gi', src: '/images/lojas/tapioca-da-gi.png' },
    { title: 'Ki-Marmitas', src: '/images/lojas/ki-marmitas.jpeg' }
  ];

  return (
    <Parceria 
      titulo="Novas Parcerias Disponíveis" 
      parcerias={novasParcerias} 
    />
  )
};

export default NovaParceria;