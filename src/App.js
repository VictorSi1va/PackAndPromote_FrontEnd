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
          </Route>
        </Routes>

        <Rodape />
    </BrowserRouter>
  );
}

export default App;