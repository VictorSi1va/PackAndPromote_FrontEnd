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

        setNovasParcerias(parceriasComImagens);
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