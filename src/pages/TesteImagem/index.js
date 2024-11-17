import { useState } from "react";
import api from "services/api";

export default function TesteImagem() {
  const [imagem, setImagem] = useState(null);
  const [idImagem, setIdImagem] = useState(null);
  const [visualizacaoImagem, setVisualizacaoImagem] = useState(null);

  const handleChangeImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setVisualizacaoImagem(URL.createObjectURL(file));
    }
  };

  const salvarImagem = async () => {
    if (!imagem) {
      alert("Selecione uma imagem para salvar.");
      return;
    }

    try {
      const extensao = imagem.name.split(".").pop();
      const base64 = await converterParaBase64(imagem);
      const tipo = imagem.type;

      const imagemDto = {
        DadosImagem: base64.split(",")[1], // Remove o prefixo data:image/png;base64
        TipoExtensao: tipo,
        NomeImagem: imagem.name,
      };

      const response = await api.post("/Imagem/SalvarImagem", imagemDto);
      setIdImagem(response.data);

      alert("Imagem salva com sucesso! ID: " + response.data);
    } catch (error) {
      console.error("Erro ao salvar imagem:", error);
      alert("Erro ao salvar imagem.");
    }
  };

  const pesquisarImagem = async () => {
    if (!idImagem) {
      alert("Digite um ID válido para pesquisar.");
      return;
    }

    try {
      const response = await api.get(`/Imagem/PesquisarImagem/${idImagem}`, {
        responseType: "blob", // Necessário para manipular a resposta binária
      });

      const imageUrl = URL.createObjectURL(response.data);
      setVisualizacaoImagem(imageUrl);

      alert("Imagem carregada com sucesso!");
    } catch (error) {
      console.error("Erro ao pesquisar imagem:", error);
      alert("Erro ao pesquisar imagem.");
    }
  };

  const excluirImagem = async () => {
    if (!idImagem) {
      alert("Digite um ID válido para excluir.");
      return;
    }

    try {
      await api.delete(`/Imagem/ExcluirImagem/${idImagem}`);
      alert("Imagem excluída com sucesso!");
      setVisualizacaoImagem(null);
      setIdImagem(null);
    } catch (error) {
      console.error("Erro ao excluir imagem:", error);
      alert("Erro ao excluir imagem.");
    }
  };

  const converterParaBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teste de Imagem</h1>

      <div>
        <label>Carregar Imagem:</label>
        <input type="file" accept="image/*" onChange={handleChangeImagem} />
      </div>

      {visualizacaoImagem && (
        <div>
          <h3>Visualização:</h3>
          <img src={visualizacaoImagem} alt="Visualização" style={{ maxWidth: "200px", marginTop: "10px" }} />
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={salvarImagem} style={{ marginRight: "10px" }}>
          Salvar Imagem
        </button>
        <button onClick={pesquisarImagem} style={{ marginRight: "10px" }}>
          Pesquisar Imagem
        </button>
        <button onClick={excluirImagem}>Excluir Imagem</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>ID da Imagem:</label>
        <input
          type="text"
          value={idImagem || ""}
          onChange={(e) => setIdImagem(e.target.value)}
          placeholder="Digite o ID da imagem"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
}