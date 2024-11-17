import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Title from 'components/Title';
import Button from 'components/Button';
import api from 'services/api';

import './SolicitarParceria.css';

const SolicitarParceria = () => {
    const { id } = useParams(); // Captura o ID da loja da URL
    const navigate = useNavigate(); // Hook para redirecionamento
    const [loja, setLoja] = useState(null); // Estado para armazenar os dados da loja
    const [loading, setLoading] = useState(true); // Indica se os dados estão carregando
    const [error, setError] = useState(null); // Estado para erros
    const [imagemUrl, setImagemUrl] = useState('/images/lojas/default.png'); // Estado para armazenar a URL da imagem (com padrão)

    const idLojaLogada = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));

    useEffect(() => {
        const fetchLoja = async () => {
            try {
                const response = await api.get(`/Vendas/PesquisarLoja/${id}`);
                const lojaData = response.data;

                setLoja(lojaData);

                // Atualiza a URL da imagem, caso exista
                if (lojaData.idImagemLoja) {
                    setImagemUrl(`${api.defaults.baseURL}Imagem/PesquisarImagem/${lojaData.idImagemLoja}`);
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Erro ao buscar os dados da loja.');
            } finally {
                setLoading(false);
            }
        };

        fetchLoja();
    }, [id]);

    const handleSolicitarParceria = async () => {
        try {
            const parceriaSolicitacaoDto = {
                IdLojaPromoter: parseInt(id), // ID da loja da URL
            };

            const response = await api.post(`/Vendas/SolicitarParceria/${idLojaLogada}`, parceriaSolicitacaoDto);
            alert(response.data); // Mensagem de sucesso da API
            navigate('/parcerias'); // Redireciona para a página de Parcerias
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Erro ao solicitar parceria.';
            alert(errorMsg);
        }
    };

    if (loading) {
        return <Title titulo="Carregando..." />;
    }

    if (error) {
        return <Title titulo={`Erro: ${error}`} />;
    }

    return (
        <div className="solicitar-parceria-container">
            <Title titulo="Solicitar Parceria" />

            <div className="loja-detalhes">
                <img
                    src={imagemUrl}
                    alt={loja?.nomeLoja || "Loja"}
                    className="loja-imagem"
                />
                <h2><strong>{loja.nomeLoja}</strong></h2>
                <p><strong>Endereço:</strong> {loja.enderecoLoja}</p>
                <p><strong>Telefone:</strong> {loja.telefoneLoja}</p>
                <p><strong>Email:</strong> {loja.emailLoja}</p>
                <p><strong>Descrição:</strong> {loja.descricaoLoja}</p>
                <p><strong>Público-Alvo:</strong> {loja.publicoAlvoLoja}</p>
                <p><strong>Idade:</strong> {loja.faixaEtariaLoja}</p>
                <p><strong>Região:</strong> {loja.regiaoLoja}</p>
                <p><strong>Preferências de Parcerias:</strong> {loja.preferenciaParceriasLoja}</p>
            </div>

            <Button
                label="Solicitar Parceria"
                onClick={handleSolicitarParceria}
            />

            <Link to="/parcerias">
                <button className="btn-voltar">Voltar para Parcerias</button>
            </Link>
        </div>
    );
};

export default SolicitarParceria;