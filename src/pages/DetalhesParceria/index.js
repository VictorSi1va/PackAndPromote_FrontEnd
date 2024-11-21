import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Title from 'components/Title';
import Button from 'components/Button';
import api from 'services/api';

import './DetalhesParceria.css';

const DetalhesParceria = () => {
    const { id } = useParams(); // Captura o ID da loja da URL a partir dos parâmetros de rota.
    const navigate = useNavigate(); // Hook para redirecionar o usuário para outras páginas.
    const [loja, setLoja] = useState(null); // Armazena os dados da loja retornados pela API.
    const [loading, setLoading] = useState(true); // Indica se os dados estão em processo de carregamento.
    const [error, setError] = useState(null); // Armazena possíveis erros na chamada da API.
    const [imagemUrl, setImagemUrl] = useState('/images/lojas/default.png'); // URL padrão para a imagem da loja.

    const idLojaLogada = parseInt(localStorage.getItem("@IdUser_PackAndPromote")); // Obtém o ID da loja logada no sistema.

    useEffect(() => {
        // Função para buscar detalhes da loja na API.
        const fetchLoja = async () => {
            try {
                const response = await api.get(`/Vendas/PesquisarLoja/${id}`); // Requisição à API.
                const lojaData = response.data;

                setLoja(lojaData); // Atualiza o estado com os dados da loja.

                if (lojaData.idImagemLoja) {
                    // Atualiza a URL da imagem se um ID de imagem for encontrado.
                    setImagemUrl(`${api.defaults.baseURL}Imagem/PesquisarImagem/${lojaData.idImagemLoja}`);
                }
            } catch (err) {
                // Atualiza o estado de erro caso a requisição falhe.
                setError(err.response?.data || 'Erro ao buscar os dados da loja.');
            } finally {
                setLoading(false); // Indica que o carregamento terminou.
            }
        };

        fetchLoja(); // Executa a função ao montar o componente.
    }, [id]); // Executa novamente se o `id` mudar.

    const handleCancelarParceria = async () => {
        // Função para cancelar a parceria.
        try {
            const parceriaCancelamentoDto = {
                IdLojaPromoter: parseInt(id), // ID da loja a ser cancelada.
            };

            // Chamada à API para cancelar a parceria.
            const response = await api.delete(`/Vendas/CancelarParceria/${idLojaLogada}`, {
                data: parceriaCancelamentoDto, // Dados enviados no corpo da requisição.
            });

            alert(response.data); // Exibe a mensagem de sucesso.
            navigate('/parcerias'); // Redireciona para a página de parcerias.
        } catch (err) {
            // Trata erros durante a requisição.
            const errorMsg = err.response?.data || 'Erro ao cancelar parceria.';
            alert(errorMsg);
        }
    };

    // Renderiza o estado de carregamento.
    if (loading) {
        return <Title titulo="Carregando..." />;
    }

    // Renderiza o estado de erro.
    if (error) {
        return <Title titulo={`Erro: ${error}`} />;
    }

    return (
        <div className="detalhes-parceria-container">
            <Title titulo="Informações da Parceria" />

            {/* Exibe os detalhes da loja */}
            <div className="loja-detalhes">
                <img
                    src={imagemUrl} // URL da imagem da loja.
                    alt={loja?.nomeLoja || "Loja"} // Nome da loja ou valor padrão.
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

            {/* Botão para cancelar parceria */}
            <Button
                label="Cancelar Parceria"
                onClick={handleCancelarParceria} // Função executada ao clicar.
                cancel={true} // Define a aparência como botão de cancelamento.
            />

            {/* Link para voltar à página de parcerias */}
            <Link to="/parcerias">
                <button className="btn-voltar">Voltar para Parcerias</button>
            </Link>
        </div>
    );
};

export default DetalhesParceria;