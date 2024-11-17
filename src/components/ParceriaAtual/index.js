import { useState, useEffect } from 'react';
import Parceria from 'components/Parceria';
import api from 'services/api';

const ParceriaAtual = () => {
  const [parceriasAtuais, setParceriasAtuais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParceriasAtuais = async () => {
      try {
        const userId = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));
        const response = await api.get(`/Vendas/ListarParceriasAtuais/${userId}`);
        const parceriasFormatadas = response.data.map(parceria => ({
          idLojaPromoter: parceria.idLoja,
          title: parceria.nomeLoja,
          src: `/images/lojas/${parceria.idLoja}.png`,
        }));
        setParceriasAtuais(parceriasFormatadas);
      } catch (err) {
        setError('Erro ao carregar parcerias atuais.');
      } finally {
        setLoading(false);
      }
    };

    fetchParceriasAtuais();
  }, []);

  return (
    <Parceria 
      titulo="Parcerias Atuais" 
      parcerias={parceriasAtuais} 
      loading={loading} 
      error={error}
      tipoParceria="ParceriaAtual"
    />
  );
};

export default ParceriaAtual;