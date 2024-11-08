import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthentication } from "context/Authentication";
import api from "../services/api";

const PrivateRoute = ({ role }) => {
  const [permissions, setPermissions] = useState(null);
  const navigate = useNavigate();
  const { userLogged } = useAuthentication();

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const response = await api.get("/Login/ListarPerfis");
        const userRoles = response.data;

        // Verifica se algum dos perfis do usuário corresponde a um dos perfis esperados
        const roleArray = role.split(",");
        const hasRole = userRoles.some(profile => roleArray.includes(profile.nomePerfil.toUpperCase()));
        setPermissions(hasRole);
      } catch (error) {
        console.error("Erro ao carregar roles:", error);
        setPermissions(false); // Define como false em caso de erro
      }
    };

    if (userLogged()) {
      loadRoles();
    } else {
      navigate("/login"); // Redireciona para login se o usuário não estiver logado
    }
  }, [role, userLogged, navigate]);

  useEffect(() => {
    if (permissions === false) {
      navigate("/"); // Redireciona para a página inicial se o usuário não tiver permissões
    }
  }, [permissions, navigate]);

  if (!userLogged() || permissions === null) {
    return null; // Evita renderizar o conteúdo antes de verificar login e permissões
  }

  return permissions ? <Outlet /> : null;
};

export default PrivateRoute;