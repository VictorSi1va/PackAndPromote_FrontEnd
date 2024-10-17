import { useState } from 'react';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Input from 'components/Input';
import './CadastroLoja.css';
import Button from 'components/Button';
import Title from 'components/Title';

const CadastroLoja = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        senha: '',
        nomeDaLoja: 'Pack and Promote',
        cnpj: '',
        descricaoDaLoja: '',
        categoria: '',
        publicoAlvo: '',
        idade: '',
        regiao: '',
        preferenciaParcerias: ''
    });

    const lojaPreenchidaExemplo = {
        usuario: 'admin',
        senha: 'admin',
        nomeDaLoja: 'Pack and Promote',
        cnpj: '12.345.678/0001-99',
        descricaoDaLoja: 'Loja especializada em embalagens personalizadas.',
        categoria: 'Alimentos',
        publicoAlvo: 'Adultos',
        idade: '26-35',
        regiao: 'Sudeste',
        preferenciaParcerias: 'Sim'
    };

    const categorias = ['Alimentos', 'Roupas', 'Eletrônicos', 'Livros'];
    const publicosAlvo = ['Adultos', 'Crianças', 'Idosos'];
    const idades = ['18-25', '26-35', '36-50', 'Acima de 50'];
    const regioes = ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'];
    const preferenciasParcerias = ['Sim', 'Não', 'Talvez'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="cadastro-loja-container">
            <Title titulo="Cadastro Loja" />
            
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    placeholder="Digite o usuário"
                />

                <Input
                    label="Senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite a senha"
                />

                <Input
                    label="Nome da Loja"
                    name="nomeDaLoja"
                    value={formData.nomeDaLoja}
                    onChange={handleChange}
                    placeholder="Digite o nome da loja"
                />

                <Input
                    label="CNPJ"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    placeholder="Digite o CNPJ"
                />

                <TextArea
                    label="Descrição da Loja"
                    name="descricaoDaLoja"
                    value={formData.descricaoDaLoja}
                    onChange={handleChange}
                    placeholder="Digite uma breve descrição sobre a loja"
                />

                <Select
                    label="Categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    options={categorias}
                />

                <Select
                    label="Público-Alvo"
                    name="publicoAlvo"
                    value={formData.publicoAlvo}
                    onChange={handleChange}
                    options={publicosAlvo}
                />

                <Select
                    label="Idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    options={idades}
                />

                <Select
                    label="Região"
                    name="regiao"
                    value={formData.regiao}
                    onChange={handleChange}
                    options={regioes}
                />

                <Select
                    label="Preferência de Parcerias"
                    name="preferenciaParcerias"
                    value={formData.preferenciaParcerias}
                    onChange={handleChange}
                    options={preferenciasParcerias}
                />

                <Button label="Salvar" onClick={() => alert('Loja Cadastrada')}/>
            </form>
        </div>
    );
};

export default CadastroLoja;