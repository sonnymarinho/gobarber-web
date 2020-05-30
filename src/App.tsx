import React, { useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './style/global';

import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);
export default App;
