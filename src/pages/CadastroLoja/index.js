import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Input from 'components/Input';
import Button from 'components/Button';
import Title from 'components/Title';
import api from 'services/api';

import './CadastroLoja.css';

const CadastroLoja = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        usuario: '',
        senha: '',
        nomeDaLoja: '',
        cnpj: '',
        endereco: '',
        telefone: '',
        email: '',
        descricaoDaLoja: '',
        categoria: '',
        publicoAlvo: '',
        idade: '',
        regiao: '',
        preferenciaParcerias: ''
    });

    const [errors, setErrors] = useState({}); // Estado para armazenar erros de validação

    // State para armazenar os dados de cada select
    const [categorias, setCategorias] = useState([]);
    const [publicosAlvo, setPublicosAlvo] = useState([]);
    const [idades, setIdades] = useState([]);
    const [regioes, setRegioes] = useState([]);
    const [preferenciasParcerias, setPreferenciasParcerias] = useState([]);
    const [planos, setPlanos] = useState([]);

    // Função para buscar os dados da API
    const fetchData = async () => {
        try {
            // Requisição para listar categorias
            const categoriasResponse = await api.get('Categoria/ListarCategorias');
            setCategorias(categoriasResponse.data.map(categoria => ({
                value: categoria.idCategoria,
                label: categoria.nomeCategoria
            })));

            // Requisição para listar faixas etárias
            const faixasEtariasResponse = await api.get('FaixaEtaria/ListarFaixasEtarias');
            setIdades(faixasEtariasResponse.data.map(faixa => ({
                value: faixa.idFaixaEtaria,
                label: faixa.descricaoFaixaEtaria
            })));

            // Requisição para listar públicos alvo
            const publicosAlvoResponse = await api.get('PublicoAlvo/ListarPublicosAlvo');
            setPublicosAlvo(publicosAlvoResponse.data.map(publico => ({
                value: publico.idPublicoAlvo,
                label: publico.descricaoPublicoAlvo
            })));

            // Requisição para listar regiões alvo
            const regioesAlvoResponse = await api.get('RegiaoAlvo/ListarRegioesAlvo');
            setRegioes(regioesAlvoResponse.data.map(regiao => ({
                value: regiao.idRegiaoAlvo,
                label: regiao.nomeRegiaoAlvo
            })));

            // Requisição para listar preferências de parcerias
            const preferenciasAlvoResponse = await api.get('PreferenciaAlvo/ListarPreferenciasAlvo');
            setPreferenciasParcerias(preferenciasAlvoResponse.data.map(preferencia => ({
                value: preferencia.idPreferenciaAlvo,
                label: preferencia.descricaoPreferenciaAlvo
            })));

            // Requisição para listar os planos
            const planosResponse = await api.get('Plano/ListarPlanos');
            setPlanos(planosResponse.data.map(plano => ({
                value: plano.idPlano,
                label: plano.nomePlano
            })));
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    };

    // Carregar os dados assim que o componente for montado
    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpar erro quando o campo for alterado
    };

    // Função para validar os campos do formulário
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

        // Verificando se os campos obrigatórios estão preenchidos
        if (!formData.usuario) {
            newErrors.usuario = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.senha) {
            newErrors.senha = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.nomeDaLoja) {
            newErrors.nomeDaLoja = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.cnpj) {
            newErrors.cnpj = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.endereco) {
            newErrors.endereco = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.telefone) {
            newErrors.telefone = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Campo obrigatório';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email inválido';
            isValid = false;
        }

        if (!formData.descricaoDaLoja) {
            newErrors.descricaoDaLoja = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.categoria) {
            newErrors.categoria = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.publicoAlvo) {
            newErrors.publicoAlvo = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.idade) {
            newErrors.idade = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.regiao) {
            newErrors.regiao = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.preferenciaParcerias) {
            newErrors.preferenciaParcerias = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.plano) {
            newErrors.plano = 'Campo obrigatório';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Função para chamar a API e salvar o usuário
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validando o formulário
        if (!validateForm()) {
            return; // Se o formulário não for válido, não enviaremos os dados
        }

        // Criando o objeto no formato esperado pela API
        const novoUsuarioDto = {
            Login: formData.usuario,
            Senha: formData.senha,
            NomeLoja: formData.nomeDaLoja,
            EnderecoLoja: formData.endereco,
            TelefoneLoja: formData.telefone,
            EmailLoja: formData.email,
            DescricaoLoja: formData.descricaoDaLoja,
            CNPJLoja: formData.cnpj,
            IdCategoria: formData.categoria,
            IdPublicoAlvo: formData.publicoAlvo,
            IdFaixaEtaria: formData.idade,
            IdRegiaoAlvo: formData.regiao,
            IdPreferenciaAlvo: formData.preferenciaParcerias,
            IdPlano: formData.plano
        };

        try {
            // Fazendo o POST para a API
            const response = await api.post('Login/CriarUsuario', novoUsuarioDto);
            if (response.status === 201) {
                alert('Usuário e loja criados com sucesso!');
                // Limpar o formulário após salvar
                setFormData({
                    usuario: '',
                    senha: '',
                    nomeDaLoja: '',
                    cnpj: '',
                    endereco: '',
                    telefone: '',
                    email: '',
                    descricaoDaLoja: '',
                    categoria: '',
                    publicoAlvo: '',
                    idade: '',
                    regiao: '',
                    preferenciaParcerias: '',
                    plano: ''
                });

                navigate('/login');
            }
        } catch (error) {
            console.error("Erro ao salvar o usuário:", error);
            alert('Erro ao criar usuário. Tente novamente.');
        }
    };

    return (
        <div className="cadastro-loja-container">
            <Title titulo="Cadastro da Loja" />

            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    placeholder="Digite o usuário"
                    maxLength={100}
                    error={errors.usuario}
                />

                <Input
                    label="Senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite a senha"
                    type="password"
                    maxLength={100}
                    error={errors.senha}
                />

                <Input
                    label="Nome da Loja"
                    name="nomeDaLoja"
                    value={formData.nomeDaLoja}
                    onChange={handleChange}
                    placeholder="Digite o nome da loja"
                    maxLength={100}
                    error={errors.nomeDaLoja}
                />

                <div className="input-group">
                    <label>CNPJ:</label>
                    <InputMask
                        mask="99.999.999/9999-99"
                        name="cnpj"
                        placeholder="Digite o CNPJ"
                        value={formData.cnpj}
                        onChange={handleChange}
                    />
                    {errors.cnpj && <span className="error-message">{errors.cnpj}</span>}
                </div>

                <Input
                    label="Endereço"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Digite o endereço"
                    maxLength={255}
                    error={errors.endereco}
                />

                <div className="input-group">
                    <label>Telefone:</label>
                    <InputMask
                        mask="(99) 99999-9999"
                        name="telefone"
                        placeholder="Digite o telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                    {errors.telefone && <span className="error-message">{errors.telefone}</span>}
                </div>

                <Input
                    label="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite o e-mail"
                    maxLength={100}
                    error={errors.email}
                />

                <TextArea
                    label="Descrição da Loja"
                    name="descricaoDaLoja"
                    value={formData.descricaoDaLoja}
                    onChange={handleChange}
                    placeholder="Digite uma breve descrição sobre a loja"
                    maxLength={255}
                    error={errors.descricaoDaLoja}
                />

                <Select
                    label="Categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    options={categorias}
                    error={errors.categoria}
                />

                <Select
                    label="Plano"
                    name="plano"
                    value={formData.plano}
                    onChange={handleChange}
                    options={planos}
                    error={errors.plano}
                />

                <Select
                    label="Público-Alvo"
                    name="publicoAlvo"
                    value={formData.publicoAlvo}
                    onChange={handleChange}
                    options={publicosAlvo}
                    error={errors.publicoAlvo}
                />

                <Select
                    label="Idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    options={idades}
                    error={errors.idade}
                />

                <Select
                    label="Região"
                    name="regiao"
                    value={formData.regiao}
                    onChange={handleChange}
                    options={regioes}
                    error={errors.regiao}
                />

                <Select
                    label="Preferência de Parcerias"
                    name="preferenciaParcerias"
                    value={formData.preferenciaParcerias}
                    onChange={handleChange}
                    options={preferenciasParcerias}
                    error={errors.preferenciaParcerias}
                />

                <Button label="Cadastrar" type="submit" />
            </form>
        </div>
    );
};

export default CadastroLoja;