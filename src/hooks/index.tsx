import React from 'react';
import { AuthConverter } from './AuthContext'; // importar aq oara depois importar para o app para ficar mais facil

const AppProvider: React.FC = ({ children }) => {
  // Providers global, colocamos todos os providers aq para depois setar no App
  return <AuthConverter>{children}</AuthConverter>;
};

export default AppProvider;
