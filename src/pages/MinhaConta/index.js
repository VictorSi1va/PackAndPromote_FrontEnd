import React, { useState } from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import './MinhaConta.css';
import Title from 'components/Title';

const MinhaConta = () => {
  const [userData, setUserData] = useState({
    lojaNome: 'Pack and Promote',
    cnpj: '20.031.219/0002-46',
    descricao: 'Pack and Promote Company',
    categoria: 'Eletrônicos',
    publicoAlvo: 'Adultos',
    idade: '26-35',
    regiao: 'Sudeste',
    preferenciaParceria: 'Sim'
  });

  const [planoData, setPlanoData] = useState({
    nomePlano: 'Gold',
    tipoPlano: 'mensal',
    quantidadeEmbalagensEntregues: '10,500+',
    mediaEntregas: '40',
    dataRenovacao: '05/12/2024'
  });

  const categorias = ['Alimentos', 'Roupas', 'Eletrônicos', 'Livros'];
  const publicosAlvo = ['Adultos', 'Crianças', 'Idosos'];
  const idades = ['18-25', '26-35', '36-50', 'Acima de 50'];
  const regioes = ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'];
  const preferenciasParcerias = ['Sim', 'Não', 'Talvez'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div className="minha-conta-container">
      <div className="conta-section">
        <Title titulo2="C o n t a"/>
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
          <Button label="Alterar" onClick={() => alert('Informações alteradas com sucesso!')} />
        </div>
      </div>

      <div className="plano-section">
        <Title titulo2="P l a n o"/>

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
            <Button label="Trocar Plano" onClick={() => alert('Trocar Plano')} />
            <Button label="Cancelar" onClick={() => alert('Cancelar Plano')} cancel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaConta;