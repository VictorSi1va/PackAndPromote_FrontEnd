import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Title from 'components/Title';
import api from 'services/api'; // Instância do axios configurada

import './MinhaConta.css';

const MinhaConta = () => {
  const [userData, setUserData] = useState({
    lojaNome: 'Pack and Promote',
    cnpj: '20.031.219/0002-46',
    endereco: 'Rua 7 de Setembro, SP, BR',
    telefone: '(11) 91234-5678',
    email: 'email@dominio.com',
    descricao: 'Pack and Promote Company',
    categoria: '1',
    publicoAlvo: '1',
    idade: '2',
    regiao: '1',
    preferenciaParceria: '1'
  });

  const [categorias, setCategorias] = useState([]);
  const [publicosAlvo, setPublicosAlvo] = useState([]);
  const [idades, setIdades] = useState([]);
  const [regioes, setRegioes] = useState([]);
  const [preferenciasParcerias, setPreferenciasParcerias] = useState([]);

  const [planoData, setPlanoData] = useState({
    nomePlano: 'Gold',
    tipoPlano: 'mensal',
    quantidadeEmbalagensEntregues: '10,500+',
    mediaEntregas: '40',
    dataRenovacao: '05/12/2024'
  });

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
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Informações alteradas com sucesso!');
  };

  return (
    <div className="minha-conta-container">
      <div className="conta-section">
        <Title titulo2="C o n t a" />
        <Input
          label="Nome da loja"
          name="lojaNome"
          value={userData.lojaNome}
          onChange={handleChange}
          placeholder="Digite o nome da loja"
        />

        <Input
          label="CNPJ"
          name="cnpj"
          value={userData.cnpj}
          onChange={handleChange}
          placeholder="Digite o CNPJ"
        />

        <Input
          label="Endereço"
          name="endereco"
          value={userData.endereco}
          onChange={handleChange}
          placeholder="Digite o endereço"
        />

        <Input
          label="Telefone"
          name="telefone"
          value={userData.telefone}
          onChange={handleChange}
          placeholder="Digite o telefone"
        />

        <Input
          label="E-mail"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Digite o e-mail"
        />

        <TextArea
          label="Descrição da loja"
          name="descricao"
          value={userData.descricao}
          onChange={handleChange}
          placeholder="Digite uma breve descrição sobre a loja"
        />

        <Select
          label="Categoria"
          name="categoria"
          value={userData.categoria}
          onChange={handleChange}
          options={categorias}
        />

        <Select
          label="Público-alvo"
          name="publicoAlvo"
          value={userData.publicoAlvo}
          onChange={handleChange}
          options={publicosAlvo}
        />

        <Select
          label="Idade"
          name="idade"
          value={userData.idade}
          onChange={handleChange}
          options={idades}
        />

        <Select
          label="Região"
          name="regiao"
          value={userData.regiao}
          onChange={handleChange}
          options={regioes}
        />

        <Select
          label="Preferência de Parcerias"
          name="preferenciaParceria"
          value={userData.preferenciaParceria}
          onChange={handleChange}
          options={preferenciasParcerias}
        />

        <div className="button-wrapper">
          <Button label="Alterar" onClick={handleSubmit} />
        </div>
      </div>

      <div className="plano-section">
        <Title titulo2="P l a n o" />
        <div className="plano-details">
          <h3 className="plano-name">Plano {planoData.nomePlano}</h3>
          <p>{planoData.quantidadeEmbalagensEntregues} embalagens entregues</p>
          <p>Média de {planoData.mediaEntregas} entregas por dia</p>
          <p>Plano mensal</p>
        </div>
        <div className="plano-footer">
          <div className="plano-renova">
            <span>Renova em {planoData.dataRenovacao}</span>
          </div>
          <div className="plano-buttons">
            <Button label="Trocar Plano" onClick={() => alert('Plano trocado com sucesso!')} />
            <Button label="Cancelar" onClick={() => alert('Plano cancelado com sucesso!')} cancel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaConta;