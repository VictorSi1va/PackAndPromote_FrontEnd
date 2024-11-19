import React, { useState, useEffect } from 'react';
import CheckboxGroup from 'components/CheckboxGroup';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Title from 'components/Title';
import api from 'services/api';

import './MinhaConta.css';

const MinhaConta = () => {
  const [userData, setUserData] = useState({
    lojaNome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: '',
    descricao: '',
    categoria: '',
    publicoAlvo: [],
    idade: [],
    regiao: [],
    preferenciaParceria: [],
    plano: ''
  });

  const [planoData, setPlanoData] = useState({
    nomePlano: '',
    tipoPlano: '',
    quantidadeEmbalagensEntregues: '',
    mediaEntregas: '',
    dataRenovacao: ''
  });

  const [categorias, setCategorias] = useState([]);
  const [publicosAlvo, setPublicosAlvo] = useState([]);
  const [idades, setIdades] = useState([]);
  const [regioes, setRegioes] = useState([]);
  const [preferenciasParcerias, setPreferenciasParcerias] = useState([]);
  const [planos, setPlanos] = useState([]);

  const [userPhoto, setUserPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Função para buscar os dados da API
  const fetchData = async () => {
    try {
      const userId = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));
      const response = await api.get(`/Login/PesquisarDadosMinhaConta/${userId}`);
      const data = response.data;

      setUserData({
        lojaNome: data.nomeLoja,
        cnpj: data.cnpjLoja,
        endereco: data.enderecoLoja,
        telefone: data.telefoneLoja,
        email: data.emailLoja,
        descricao: data.descricaoLoja,
        categoria: data.idCategoria,
        publicoAlvo: data.publicoAlvo,
        idade: data.faixaEtaria,
        regiao: data.regiaoAlvo,
        preferenciaParceria: data.preferenciaAlvo,
        plano: data.idPlano
      });

      setPlanoData({
        nomePlano: data.nomePlano,
        tipoPlano: data.periodoPlano,
        quantidadeEmbalagensEntregues: data.mediaMensalEmbalagensEntreguesPlano,
        mediaEntregas: data.mediaDiariaEmbalagensEntreguesPlano,
        dataRenovacao: data.proximaRenovacaoPlano
      });

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

      if (data.idLojaImagem) {
        const photoUrl = `${api.defaults.baseURL}Imagem/PesquisarImagem/${data.idLojaImagem}`;
        setPhotoPreview(photoUrl);
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  // Carregar os dados assim que o componente for montado
  useEffect(() => {
    fetchData();
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const savePhoto = async () => {
    if (!userPhoto) {
      alert('Selecione uma imagem para salvar.');
      return;
    }

    try {
      const base64 = await convertToBase64(userPhoto);
      const idUsuarioLogado = parseInt(localStorage.getItem("@IdUser_PackAndPromote"));

      const imagemDto = {
        DadosImagem: base64.split(',')[1], // Remove o prefixo "data:image/*;base64,"
        TipoExtensao: userPhoto.type, // Tipo MIME da imagem, como "image/jpeg"
        NomeImagem: userPhoto.name,
      };

      const response = await api.post(`/Imagem/SalvarImagem/${idUsuarioLogado}`, imagemDto);
      const photoId = response.data;

      alert('Foto de perfil atualizada com sucesso!');
      setPhotoPreview(`${api.defaults.baseURL}Imagem/PesquisarImagem/${photoId}`);
    } catch (error) {
      console.error('Erro ao salvar foto de perfil:', error);
      alert('Erro ao salvar foto de perfil.');
    }
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleCheckboxGroupChange = (name, selectedOptions) => {
    setUserData(prevState => ({
      ...prevState,
      [name]: selectedOptions
    }));
  };

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
        <Title titulo2="Conta" />
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
          label="Plano"
          name="plano"
          value={userData.plano}
          onChange={handleChange}
          options={planos}
        />

        <CheckboxGroup
          label="Público-alvo"
          name="publicoAlvo"
          options={publicosAlvo}
          selectedOptions={userData.publicoAlvo}
          onChange={handleCheckboxGroupChange}
        />

        <CheckboxGroup
          label="Idade"
          name="idade"
          options={idades}
          selectedOptions={userData.idade}
          onChange={handleCheckboxGroupChange}
        />

        <CheckboxGroup
          label="Região"
          name="regiao"
          options={regioes}
          selectedOptions={userData.regiao}
          onChange={handleCheckboxGroupChange}
        />

        <CheckboxGroup
          label="Preferência de Parcerias"
          name="preferenciaParceria"
          options={preferenciasParcerias}
          selectedOptions={userData.preferenciaParceria}
          onChange={handleCheckboxGroupChange}
        />

        <div className="button-wrapper">
          <Button label="Alterar" onClick={handleSubmit} />
        </div>
      </div>

      <div className="plano-section">
        <div className="foto-section">
          <Title titulo2="Foto de Perfil" />
          <div className="foto-container">
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Foto do Usuário"
                className="foto-preview"
              />
            ) : (
              <p>Sem foto disponível</p>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
            <Button label="Alterar Foto" onClick={savePhoto} />
          </div>
        </div>

        <Title titulo2="Plano" />
        <div className="plano-details">
          <h3 className="plano-name">{planoData.nomePlano}</h3>
          <p>{planoData.quantidadeEmbalagensEntregues} embalagens entregues</p>
          <p>Média de {planoData.mediaEntregas} entregas por dia</p>
          <p>Plano {planoData.tipoPlano}</p>
          <div className="plano-renova">
            <span>Renova em {planoData.dataRenovacao}</span>
          </div>
        </div>

        {/* <div className="plano-footer">
          <div className="plano-renova">
            <span>Renova em {planoData.dataRenovacao}</span>
          </div>
          <div className="plano-buttons">
            <Button label="Trocar Plano" onClick={() => alert('Plano trocado com sucesso!')} />
            <Button label="Cancelar" onClick={() => alert('Plano cancelado com sucesso!')} cancel />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MinhaConta;