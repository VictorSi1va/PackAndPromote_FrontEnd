import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Title from 'components/Title'; // Componente reutilizável para exibir títulos.
import Button from 'components/Button'; // Componente reutilizável para botões.
import api from 'services/api'; // Serviço de API para realizar chamadas HTTP.

import './AprovarParceria.css'; // Estilos específicos para o componente.

const AprovarParceria = () => {
    const { id } = useParams(); // Captura o parâmetro "id" da URL, que representa a loja.
    const navigate = useNavigate(); // Hook para realizar redirecionamentos de página.
    const [loja, setLoja] = useState(null); // Armazena os dados da loja obtidos da API.
    const [loading, setLoading] = useState(true); // Estado de carregamento.
    const [error, setError] = useState(null); // Estado de erro para exibir mensagens apropriadas.
    const [imagemUrl, setImagemUrl] = useState('/images/lojas/default.png'); // URL da imagem com valor padrão.

    const idLojaLogada = parseInt(localStorage.getItem("@IdUser_PackAndPromote")); // Obtém o ID da loja logada armazenado no localStorage.

    useEffect(() => {
        const fetchLoja = async () => {
            try {
                const response = await api.get(`/Vendas/PesquisarLoja/${id}`); // Realiza uma chamada GET para buscar os dados da loja pelo ID.
                const lojaData = response.data; // Extrai os dados da resposta.

                setLoja(lojaData); // Atualiza o estado com os dados da loja.

                // Se a loja tiver uma imagem associada, atualiza a URL para exibi-la.
                if (lojaData.idImagemLoja) {
                    setImagemUrl(`${api.defaults.baseURL}Imagem/PesquisarImagem/${lojaData.idImagemLoja}`);
                }
            } catch (err) {
                setError(err.response?.data || 'Erro ao buscar os dados da loja.'); // Define o estado de erro em caso de falha.
            } finally {
                setLoading(false); // Finaliza o estado de carregamento.
            }
        };

        fetchLoja(); // Chama a função assim que o componente é montado.
    }, [id]); // Executa o efeito novamente apenas se o ID mudar.

    const handleAprovarParceria = async () => {
        try {
            // Objeto que será enviado para a API ao aprovar a parceria.
            const parceriaAprovacaoDto = {
                IdLojaPioneer: parseInt(id), // ID da loja pioneira obtido da URL.
            };

            const response = await api.post(`/Vendas/AprovarParceria/${idLojaLogada}`, parceriaAprovacaoDto); // Faz a requisição POST para aprovar a parceria.
            alert(response.data); // Exibe a mensagem de sucesso retornada pela API.
            navigate('/parcerias'); // Redireciona para a página de parcerias.
        } catch (err) {
            const errorMsg = err.response?.data || 'Erro ao aprovar parceria.'; // Mensagem de erro apropriada.
            alert(errorMsg); // Exibe o erro em um alerta.
        }
    };

    // Caso os dados ainda estejam carregando, exibe uma mensagem de "Carregando...".
    if (loading) {
        return <Title titulo="Carregando..." />;
    }

    // Caso tenha ocorrido um erro, exibe a mensagem correspondente.
    if (error) {
        return <Title titulo={`Erro: ${error}`} />;
    }

    return (
        <div className="aprovar-parceria-container">
            <Title titulo="Aprovar Parceria" /> {/* Exibe o título da página. */}

            <div className="loja-detalhes">
                <img
                    src={imagemUrl} // Exibe a imagem da loja.
                    alt={loja?.nomeLoja || "Loja"} // Texto alternativo caso a loja não tenha nome.
                    className="loja-imagem" // Classe CSS para estilização.
                />
                {/* Exibe os detalhes da loja */}
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
                label="Aprovar Parceria" // Texto do botão.
                onClick={handleAprovarParceria} // Função chamada ao clicar no botão.
            />

            {/* Link para voltar à página de parcerias */}
            <Link to="/parcerias">
                <button className="btn-voltar">Voltar para Parcerias</button> {/* Botão estilizado */}
            </Link>
        </div>
    );
};

export default AprovarParceria; // Exporta o componente como padrão.