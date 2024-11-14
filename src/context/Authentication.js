import { createContext, useCallback, useContext, useState, useEffect } from "react";
import api from "../services/api";

// Cria o contexto de autenticação
const AuthenticationContext = createContext({});

const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("@AuthToken_PackAndPromote");
    if (savedToken) {
      api.defaults.headers.authorization = `Bearer ${savedToken}`;
      
      return savedToken;
    }
    return null;
  });

// Função de login para autenticar o usuário e salvar o token
const signIn = useCallback(async ({ username, password }) => {
  try {
    const response = await api.post("/Login/Entrar", {
      Login: username,
      Senha: password,
    });
    
    const { token, idUser } = response.data;

    if (token) {
      setToken(token);
      localStorage.setItem("@AuthToken_PackAndPromote", token);
      localStorage.setItem("@IdUser_PackAndPromote", idUser);

      api.defaults.headers.authorization = `Bearer ${token}`;
    } else {
      console.error("O Token não foi encontrado.");

      throw new Error("Erro no login: token não encontrado!");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    throw new Error("Erro no login");
  }
}, []);
  
  // Função de logout
  const signOut = useCallback(() => {
    setToken(null);
    localStorage.removeItem("@AuthToken_PackAndPromote");
    localStorage.removeItem("@IdUser_PackAndPromote");
    delete api.defaults.headers.authorization;
  }, []);

  // Verifica se o usuário está logado
  const userLogged = useCallback(() => {
    return !!localStorage.getItem("@AuthToken_PackAndPromote");
  }, []);

  // Verificação do token ao carregar a aplicação
  useEffect(() => {
    const savedToken = localStorage.getItem("@AuthToken_PackAndPromote");
    if (savedToken) {
      api.defaults.headers.authorization = `Bearer ${savedToken}`;
      setToken(savedToken);
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ token, signIn, signOut, userLogged }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("O useAuthentication deve ser usado dentro de um AuthenticationProvider");
  }
  return context;
}

export { AuthenticationProvider, useAuthentication };