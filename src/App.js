import { BrowserRouter, Routes, Route } from "react-router-dom"; // Gerenciamento de rotas
import { AuthenticationProvider } from "context/Authentication"; // Provedor de autenticação
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ComoFunciona from "./pages/ComoFunciona";
import Planos from "./pages/Planos";
import QuemSomos from "./pages/QuemSomos";
import CadastroLoja from "pages/CadastroLoja";
import MinhaConta from "pages/MinhaConta";
import Parcerias from "pages/Parcerias";
import SolicitarParceria from "pages/SolicitarParceria";
import AprovarParceria from "pages/AprovarParceria";
import DetalhesParceria from "pages/DetalhesParceria";
import NotFound from "pages/NotFound";

import DefaultPage from "./components/DefaultPage"; // Layout padrão
import Menu from "./components/Menu"; // Componente do menu principal
import Rodape from "components/Rodape"; // Componente do rodapé
import PrivateRoute from "utils/PrivateRoute"; // Gerenciamento de rotas privadas

import './App.css'; // Estilos globais

function App() {
  return (
    <BrowserRouter> {/* Gerenciador de rotas do React */}
      <AuthenticationProvider> {/* Provedor do contexto de autenticação */}
        <Menu /> {/* Componente fixo do menu no topo da página */}

        <Routes> {/* Definição de rotas */}
          {/* Rotas públicas */}
          <Route path="/" element={<DefaultPage />}> {/* Layout padrão para rotas públicas */}
            <Route path="/" element={<Home />} /> {/* Página inicial */}
            <Route path="cadastro-loja" element={<CadastroLoja />} /> {/* Página de cadastro de loja */}
            <Route path="planos" element={<Planos />} /> {/* Página de planos */}
            <Route path="como-funciona" element={<ComoFunciona />} /> {/* Página "Como Funciona" */}
            <Route path="quem-somos" element={<QuemSomos />} /> {/* Página "Quem Somos" */}
            <Route path="faq" element={<Faq />} /> {/* Página de FAQ */}
            <Route path="login" element={<Login />} /> {/* Página de login */}
          </Route>

          {/* Rotas protegidas */}
          <Route element={<PrivateRoute role="ADMINISTRADOR,CLIENTE" />}> {/* Permissão necessária: ADMINISTRADOR ou CLIENTE */}
            <Route path="parcerias" element={<Parcerias />} /> {/* Página de parcerias */}
            <Route path="solicitar-parceria/:id" element={<SolicitarParceria />} /> {/* Página de solicitação de parceria */}
            <Route path="aprovar-parceria/:id" element={<AprovarParceria />} /> {/* Página de aprovação de parceria */}
            <Route path="detalhes-parceria/:id" element={<DetalhesParceria />} /> {/* Detalhes de uma parceria específica */}
            <Route path="minha-conta" element={<MinhaConta />} /> {/* Página "Minha Conta" */}
            <Route path="logout" element={<Login />} /> {/* Logout redireciona para login */}
          </Route>

          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<NotFound />} /> {/* Página "404 Not Found" */}
        </Routes>

        <Rodape /> {/* Componente fixo do rodapé */}
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;