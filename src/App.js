import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ComoFunciona from "./pages/ComoFunciona";
import Planos from "./pages/Planos";
import QuemSomos from "./pages/QuemSomos";

import DefaultPage from "./components/DefaultPage";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import CadastroLoja from "pages/CadastroLoja";
import MinhaConta from "pages/MinhaConta";
import Parcerias from "pages/Parcerias";

function App() {
  return (
    <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="como-funciona" element={<ComoFunciona />} />
            <Route path="planos" element={<Planos />} />
            <Route path="quem-somos" element={<QuemSomos />} />
            <Route path="faq" element={<Faq />} />
            <Route path="login" element={<Login />} />

            <Route path="cadastro-loja" element={<CadastroLoja />} />

            <Route path="parcerias" element={<Parcerias />} />
            <Route path="minha-conta" element={<MinhaConta />} />
          </Route>
        </Routes>

        <Rodape />
    </BrowserRouter>
  );
}

export default App;
