import { useState, useEffect } from 'react';
import Parceria from 'components/Parceria';
import api from 'services/api';

const ParceriaAprovacao = () => {
  const [parceriasPendentes, setParceriasPendentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParceriasPendentes = async () => {
      try {
        const userId = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));
        const response = await api.get(`/Vendas/ListarParceriasComSolicitacoesPendentes/${userId}`);
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

        setParceriasPendentes(parceriasComImagens);
      } catch (err) {
        setError('Erro ao carregar parcerias pendentes.');
      } finally {
        setLoading(false);
      }
    };

    fetchParceriasPendentes();
  }, []);

  return (
    <Parceria 
      titulo="Parcerias Pendentes de Aprovação" 
      parcerias={parceriasPendentes} 
      loading={loading} 
      error={error}
      tipoParceria="AprovacaoParceria"
    />
  );
};

export default ParceriaAprovacao;