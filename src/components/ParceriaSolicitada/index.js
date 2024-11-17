import { useState, useEffect } from 'react';
import Parceria from 'components/Parceria';
import api from 'services/api';

const ParceriaSolicitada = () => {
  const [parceriasSolicitadas, setParceriasSolicitadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParceriasSolicitadas = async () => {
      try {
        const userId = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));
        const response = await api.get(`/Vendas/ListarParceriasSolicitadas/${userId}`);
        const parceriasData = response.data;

        // Busca imagens utilizando o IdImagemLoja
        const parceriasComImagens = await Promise.all(
          parceriasData.map(async (parceria) => {
            let imageUrl = '/images/lojas/default.png'; // Imagem padrão
            if (parceria.idImagemLoja) {
              imageUrl = `${api.defaults.baseURL}Imagem/PesquisarImagem/${parceria.idImagemLoja}`;
            }
            return {
              idLojaPromoter: parceria.idLoja,
              title: parceria.nomeLoja,
              src: imageUrl,
            };
          })
        );

        setParceriasSolicitadas(parceriasComImagens);
      } catch (err) {
        setError('Erro ao carregar parcerias solicitadas.');
      } finally {
        setLoading(false);
      }
    };

    fetchParceriasSolicitadas();
  }, []);

  return (
    <Parceria 
      titulo="Parcerias Solicitadas" 
      parcerias={parceriasSolicitadas} 
      loading={loading} 
      error={error}
      tipoParceria="ParceriaSolicitada"
    />
  );
};

export default ParceriaSolicitada;