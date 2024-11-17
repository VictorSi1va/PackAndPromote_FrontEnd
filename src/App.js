import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "context/Authentication";
import './App.css';
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ComoFunciona from "./pages/ComoFunciona";
import Planos from "./pages/Planos";
import QuemSomos from "./pages/QuemSomos";
import CadastroLoja from "pages/CadastroLoja";
import MinhaConta from "pages/MinhaConta";
import Parcerias from "pages/Parcerias";

import DefaultPage from "./components/DefaultPage";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PrivateRoute from "utils/PrivateRoute";
import NotFound from "pages/NotFound";
import SolicitarParceria from "pages/SolicitarParceria";
import DetalhesParceria from "pages/DetalhesParceria";
import TesteImagem from "pages/TesteImagem";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="cadastro-loja" element={<CadastroLoja />} />
            <Route path="planos" element={<Planos />} />
            <Route path="como-funciona" element={<ComoFunciona />} />
            <Route path="quem-somos" element={<QuemSomos />} />
            <Route path="faq" element={<Faq />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute role="ADMINISTRADOR,CLIENTE" />}>
            <Route path="parcerias" element={<Parcerias />} />
            <Route path="solicitar-parceria/:id" element={<SolicitarParceria />} />
            <Route path="detalhes-parceria/:id" element={<DetalhesParceria />} />
            <Route path="minha-conta" element={<MinhaConta />} />
            <Route path="logout" element={<Login />} />

            <Route path="imagem" element={<TesteImagem />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Rodape />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
