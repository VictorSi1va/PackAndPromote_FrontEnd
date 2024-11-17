import { useState, useEffect } from 'react';
import Parceria from 'components/Parceria';
import api from 'services/api';

const NovaParceria = () => {
  const [novasParcerias, setNovasParcerias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNovasParcerias = async () => {
      try {
        const userId = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));
        const response = await api.get(`/Vendas/ListarNovasParcerias/${userId}`);
        const parceriasFormatadas = response.data.map(parceria => ({
          idLojaPromoter: parceria.idLoja,
          title: parceria.nomeLoja,
          src: `/images/lojas/${parceria.idLoja}.png`,
        }));
        setNovasParcerias(parceriasFormatadas);
      } catch (err) {
        setError('Erro ao carregar novas parcerias.');
      } finally {
        setLoading(false);
      }
    };

    fetchNovasParcerias();
  }, []);

  return (
    <Parceria 
      titulo="Novas Parcerias Disponíveis" 
      parcerias={novasParcerias} 
      loading={loading} 
      error={error}
      tipoParceria="NovaParceria"
    />
  );
};

export default NovaParceria;