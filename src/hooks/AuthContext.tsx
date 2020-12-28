import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // criar contexto quando as variaveis seram acessadas em diversos locais, ex: nome do usuario

export const AuthConverter: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    // quando o user sair e voltar pro site
    const token = localStorage.getItem('@Movies.token');
    const user = localStorage.getItem('@Movies.user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {};
  });

  const signIn = useCallback(({ email, password }) => {
    // metodo para login

    // setando um user de exemplo
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const user = {
      email,
      password,
    };

    localStorage.setItem('@Movies.token', token);
    localStorage.setItem('@Movies.user', JSON.stringify(user)); // usar stringfy por ser um objeto
    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useAuth() {
  const context = useContext(AuthContext); // passando a var de contexto aqui

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider'); // disparar o erro se usar o Auth sem passar o auth provider em volta da tag
  }

  return context; // se achar retorna
}
