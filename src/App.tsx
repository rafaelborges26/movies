import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppProvider from './hooks';
import Store from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <Provider store={Store}>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyle />
      </Provider>
    </Router>
  </>
);

export default App;
